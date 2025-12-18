// ============================================
// Shows all posts with a specific tag
// ============================================
<template>
  <Layout>
    <section class="py-5">
      <div class="container px-5">
        <h2 class="fw-bolder fs-5 mb-4">{{ $page.mytags.name }}</h2>
        <div class="gx-5 row pb-5" v-if="$page.mytags.belongsTo.totalCount > 0">
          <template v-for="child in $page.mytags.belongsTo.edges">
            <div class="tagCard card col-lg-4 col-md-6" v-if='child.node.__typename === "PhotoTag"'>
              <PhotoTagCard
                :path="child.node?.path"
                :name="child.node?.name"
              />
            </div>
          </template>
        </div>
        <div class="gx-5 row" v-if="$page.myphotos.belongsTo.totalCount > 0">
          <template v-for="child in $page.myphotos.belongsTo.edges">
            <ImageCard v-if='child.node.__typename === "Photo"'
              :key="child.node.id"
              :image_name=child.node.image_name
              :image_title=child.node.image_title
              :image_caption=child.node.image_caption
              :full_image_path=child.node.full_image_path
              :image_creationDate=child.node.creationDate
              :detailLink=child.node?.path
              :album_path=child.node.album?.path
              :album_title=child.node.album?.album_title
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
  mytags: photoTag(id: $id) {
    id 
    name
    belongsTo (filter:{typeName: {eq:PhotoTag}}) {
      totalCount
      edges {
        node {
          __typename
          ... on PhotoTag {
            name
            path
          }
        }
      }
    }
  }
  myphotos: photoTag(id: $id) {
    id 
    name
    belongsTo (filter:{typeName: {eq:Photo}}) {
      totalCount
      edges {
        node {
          __typename
          ... on Photo {
            image_name
            image_title
            image_caption
            creationDate(format: "MMMM D, YYYY")
            full_image_path
            path
            album {
              id
              album_title
              path
            }
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
import PhotoTagCard from '~/components/PhotoTagCard.vue'
import ImageCard from '~/components/ImageCard.vue'

export default {
  components: {
    PhotoTagCard,
    ImageCard
  },
  metaInfo() {
    return {
      title: this.$page.mytags.name
    }
  },
}
</script>
