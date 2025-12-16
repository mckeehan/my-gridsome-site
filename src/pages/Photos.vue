// ============================================
// ============================================
<template>
  <Layout>
    <section class="py-5">
      <div class="container px-5">
        <h2>Photo Galleries</h2>
        <div class="row gx-5">
          <template v-for="child in $page.allAlbum.edges">
            <GalleryCard
              :key="child.node.id"
              :album_name=child.node.album_title
              :album_date=child.node.album_date
              :image_path=child.node.album_image_path
              :collection=child.node.collection
              :gallery_link=child.node.album_path
            />
          </template>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query TopLevelGalleries {
  allAlbum(
    filter: { parentAlbums_id: { eq: 1 } }
    sortBy: "album_date"
    order: DESC
  ) {
    edges {
      node {
        id
        album_title
        album_date(format: "MMMM D, YYYY")
        album_image_path
        collection
        album_caption
        path
        album_path
      }
    }
  }
}
</page-query>

<script>
import GalleryCard from '~/components/GalleryCard.vue'

export default {
  components: {
    GalleryCard,
  },
  metaInfo() {
    return {
      title: `Album: ${this.$page.parentAlbums.album_title}`
    }
  },
}
</script>
