// ============================================
// ============================================
<template>
  <Layout>
    <section class="py-5">
      <div class="container px-5">
        <h2 class="fw-bolder fs-5 mb-4">{{ $page.album.album_title }}</h2>
        <p>{{ $page.album.album_capiton }} </p>
        <div class="row gx-5">
          <template v-for="child in $page.album.belongsTo.edges">
            <GalleryCard v-if='child.node.__typename === "Album"'
              :key="child.node.id"
              :album_name=child.node.album_title
              :album_date=child.node.album_date
              :image_path=child.node.album_image_path
              :collection=child.node.collection
              :gallery_link=child.node?.path
            />
            <ImageCard v-if='child.node.__typename === "Photo"'
              :key="child.node.id"
              :image_name=child.node.image_name
              :image_title=child.node.image_title
              :image_caption=child.node.image_caption
              :full_image_path=child.node.full_image_path
              :image_creationDate=child.node.creationDate
              :detailLink=child.node?.path
              :tags=child.node.photoTag
            />
          </template>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  album(id: $id) {
    id
    album_title
    album_date
    album_caption
    belongsTo {
      totalCount
      edges {
        node {
          __typename
          ... on Album {
            id
            album_title
            album_date
            album_image_path
            collection
            album_caption
            path
            album_path
          }
          ... on Photo {
            image_name
            image_title
            image_caption
            creationDate(format: "MMMM D, YYYY")
            full_image_path
            path
            album_path
            album_title
            photoTag {
              id
              path
              name
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import GalleryCard from '~/components/GalleryCard.vue'
import ImageCard from '~/components/ImageCard.vue'

export default {
  components: {
    GalleryCard,
    ImageCard
  },
  metaInfo() {
    return {
      title: `Album: ${this.$page.album.album_title}`
    }
  },
}
</script>
