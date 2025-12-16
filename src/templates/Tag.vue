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

<style scoped>
.tag-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.count {
  color: #666;
  margin-bottom: 2rem;
}

.page-list {
  list-style: none;
  padding: 0;
}

.page-list li {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.page-list li:last-child {
  border-bottom: none;
}

.page-list a {
  text-decoration: none;
  color: inherit;
}

.page-list h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.page-list h3:hover {
  color: #42b983;
}

.page-list p {
  color: #666;
  margin-bottom: 0.5rem;
}

.page-list time {
  color: #999;
  font-size: 0.9rem;
}
</style>
