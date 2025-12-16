<template>
  <div class="col-lg-4 mb-5">
    <div class="imagecardcomponent card h-100 shadow border-0">
      <g-image loading="lazy" class="card-img-top" :src="full_image_path" :alt="image_title" />
      <div class="card-body p-4">
        <div v-if="image_title || image_name" class="h5 card-title mb-3">{{ image_title || image_name }}</div>
        <div v-if="image_caption" class="card-text mb-0"><ReactMarkdown>{{ image_caption }}</ReactMarkdown></div>
        <div class="small">
          <div class="text-muted">{{ image_creationDate }}</div>
          <div class="text-muted"><g-link :to="detailLink">details</g-link></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'image_title',
    'image_name',
    'image_caption',
    'image_creationDate',
    'full_image_path',
    'detailLink'
  ],
  methods: {
    getAlbumPath(album_path) {
      const name = album_path.replaceAll(/'/g,"-").replace(/[|&;$%@"<>()+,]/g, "").replaceAll(/ /g, '-').toLowerCase()
      return `/photos/${name}`;
    }
  },
}
</script>
