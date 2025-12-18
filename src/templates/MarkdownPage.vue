// ============================================
// Renders individual markdown files
// ============================================
<template>
  <Layout>
    <section itemscope="Article" itemtype="https://schema.org/Article">
      <div class="container px-5 my-5">
        <div class="row gx-5">
          <div class="col-lg-3 bg-light no-print">
            <div class="d-flex align-top mt-lg-5 mb-4 ">
              <g-image v-if="$page.markdownPage.author?.avatar" class="rounded-circle avatar-image" width="40" height="40" fit="inside" :src="$page.markdownPage.author.avatar" :alt="$page.markdownPage.author.name"/>
              <div class="ms-3">
                <div v-if="$page.markdownPage.author?.name"  itemprop="author" class="fw-bold" v-html="$page.markdownPage.author.name" />
                <div v-if="$page.markdownPage.date" itemprop="datePublished" class="text-muted" v-html="$page.markdownPage.date" />
              </div>
            </div>
            <hr/>
            <div className="ms-3" v-if="$page.markdownPage.tags.length">
              Find related pages:
              <div v-if="$page.markdownPage.tags.length" class="tags">
                <g-link 
                  v-for="tag in $page.markdownPage.tags" 
                  :key="tag.id" 
                  :to="tag.path"
                  class="tag"
                >
                  {{ tag.id }}
                </g-link>
              </div>
            </div> 
          </div>
          <div class="col-lg-9">
            <h1 itemprop="name" class="d-none" v-html="$page.markdownPage.title"/>
            <article class="clearfix">
              <section v-if="$page.markdownPage.featuredImage" class="w-50 float-md-end no-print">
                <figure itemprop="thumbnail" class="figure">
                  <Zoom>
                  <g-image class="img-fluid" :src="$page.markdownPage.featuredImage" alt="" />
                  </Zoom>
                  <figcaption class="figure-caption" v-html="$page.markdownPage.featuredImageCaption" />
                </figure>
              </section>
              <div v-html="$page.markdownPage.content" />
              <hr/>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container px-5">
        <div class="gx-5 row pb-5" v-if="$page.subFolders?.edges.length > 0">
          <template v-for="subdir in $page.subFolders?.edges">
            <div class="tagCard card col-lg-4 col-md-6">
              <div class="card-body">
                <g-link class="text-decoration-none link-dark stretched-link" :to="subdir.node.path">
                  <b-icon icon="folder-symlink-fill" class="align-middle" font-scale="2"></b-icon>&nbsp;{{ subdir.node.name }}
                </g-link>
              </div>
            </div>
          </template>
        </div>
        <div class="row gx-5">
          <template v-for="child in $page.children.edges">
            <NoteCard
              :key="child.node.id"
              :title="child.node.title"
              :path="child.node.path"
              :date="child.node.date"
              :excerpt="child.node.excerpt"
              :featuredImage="child.node.featuredImage"
              :featuredImageCaption="child.node.featuredImageCaption"
              :author="child.node.author"
              :tags="child.node.tags"
            />
          </template>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!, $subFolderRegex: String!, $directory: String!) {
  markdownPage(id: $id) {
    id
    title
    path
    date(format: "MMMM D, YYYY")
    excerpt
    featuredImage
    featuredImageCaption
    author {
      name
      avatar
    }
    tags {
      id
      path
    }
    content
  }

  subFolders: allDirectory (
    filter: {
      path: { regex: $subFolderRegex }
    },
    sortBy: "path",
    order: ASC
  ) {
    edges {
      node {
        id
        path
        name
      }
    }
  }

  children: allMarkdownPage(
    filter: {
      directory: { eq: $directory },
      fileInfo: { name: { ne: "index" } }
    },
    sortBy: "title",
    order: ASC
    ) {
    edges {
      node {
        id
        title
        path
        date(format: "MMMM D, YYYY")
        excerpt
        featuredImage
        featuredImageCaption
        fileInfo {
          name
        }
        author {
          name
          avatar
        }
        tags {
          id
        }
      }
    }
  }
}
</page-query>

<script>
import NoteCard from '~/components/NoteCard.vue'

export default {
  components: {
    NoteCard,
  },
  metaInfo() {
    return {
      title: this.$page.markdownPage.title
    }
  },
}
</script>
