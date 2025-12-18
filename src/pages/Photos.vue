// ============================================
//
// ============================================
<template>
  <Layout>
    <section class="py-5">
      <div class="container px-5">
        <h2 class="fw-bolder fs-5 mb-4">Photos By Tag </h2>
        <div class="container px-5 row">
          <template v-for="child in $page.allPhotoTag.edges">
            <div class="tagCard card col-lg-4 col-md-6">
              <PhotoTagCard v-if="child.node"
                :path="child.node.path"
                :name="child.node.name"
              />
            </div>
          </template>
        </div>
      </div>
      <div class="container px-5">
        <h2 class="fw-bolder fs-5 pt-5 mb-4">Photo Galleries</h2>
        <div class="row gx-5">
          <template v-for="child in $page.allAlbum.edges">
            <GalleryCard v-if="child.node"
              :key="child.node.id"
              :album_name=child.node.album_title
              :album_date=child.node.album_date
              :image_path=child.node.album_image_path
              :collection=child.node.collection
              :gallery_link=child.node.path
            />
          </template>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query TopLevelGalleries {
  allPhotoTag(filter: { photoTag_id: { eq: 0 } }, sortBy: "name", order:ASC) {
    edges {
      node {
        id
        name
        path
      }
    }
  }
  allAlbum(
    filter: { album_id: { eq: 1 } }
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
import PhotoTagCard from '~/components/PhotoTagCard.vue'

export default {
  components: {
    GalleryCard,
    PhotoTagCard,
  },
  metaInfo() {
    return {
      title: 'Photo Galleries'
    }
  },
}
</script>
