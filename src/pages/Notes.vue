// ============================================
// Lists all notes and subdirectories
// ============================================
<template>
  <Layout>
    <section class="py-5">
      <div class="container px-5">
        <h2>Notes</h2>
        <p class="count">{{ $page.mypages.totalCount  }} {{ $page.mypages.totalCount === 1 ? 'post' : 'posts' }}</p>
        <div class="row gx-5">
      
          <template v-for="page in $page.mypages.edges">
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
      <div class="pagination pagination-lg justify-content-center mb-5 mb-xl-0" key="pagination">
          <Pager
            :info="$page.mypages.pageInfo"
            linkClass="page-item page-link"
            activeLinkClass="active"
          />
      </div>
    </section>
  </Layout>
</template>

<page-query>
query AllPages ($page: Int) {
  mypages: allMarkdownPage (
    perPage: 9,
    page: $page,
    sortBy: "date",
    order: DESC,
    filter: {
      public: { eq: "yes" },
      path: { regex: "^/notes" }
    }
  ) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
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
</page-query>

<script>
import { Pager } from "gridsome";
import NoteCard from '~/components/NoteCard.vue'

export default {
  components: {
    NoteCard,
    Pager,
  },
  metaInfo: {
    title: 'Notes'
  },
}
</script>
