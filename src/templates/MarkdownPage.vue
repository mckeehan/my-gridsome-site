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
            <div className="ms-3">
              Find related pages:
              <div v-if="$page.markdownPage.tags" class="tags">
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

  </Layout>
</template>

<page-query>
query ($id: ID!) {
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
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.markdownPage.title
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>
