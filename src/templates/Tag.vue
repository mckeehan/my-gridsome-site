// ============================================
// Shows all posts with a specific tag
// ============================================
<template>
  <Layout>
    <section class="py-5">
      <div class="container px-5">
        <h2>Tag: {{ $page.tag.id }}</h2>
        <p class="count">{{ $page.tag.belongsTo.totalCount }} {{ $page.tag.belongsTo.totalCount === 1 ? 'page' : 'pages' }}</p>
        <div class="row gx-5">
          <template v-for="page in $page.tag.belongsTo.edges">
            <NoteCard
              :key="page.node.id"
              :title="page.node.title"
              :path="page.node.path"
              :date="page.node.date"
              :excerpt="page.node.excerpt"
              :tags="page.node.tags"
              :featuredImage="page.node.featuredImage"
              :featuredImageCaption="page.node.featuredImageCaption"
              :author="page.node.author"
            />
          </template>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag(id: $id) {
    id
    belongsTo {
      totalCount
      edges {
        node {
          ... on MarkdownPage {
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
          }
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
    NoteCard
  },
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.id}`
    }
  },
}
</script>
