<template>
  <div class="col-lg-4 mb-5">
    <div class="gallerycardcomponent card h-100 shadow border-0">
      <g-image loading="lazy" class="card-img-top" :src="image_path" :alt="album_name" />
      <div class="card-body p-4">
        <div class="badge bg-primary bg-gradient rounded-pill mb-2">{{ collection }}</div>
        <g-link class="text-decoration-none link-dark stretched-link" :to="getAlbumPath(gallery_link)"><div class="h5 card-title mb-3">{{ album_name }}</div></g-link>
      </div>
      <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
        <div class="d-flex align-items-end justify-content-between">
          <div class="d-flex align-items-center">
            <div class="small">
              <div class="text-muted">{{ album_date}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'album_name',
    'album_date',
    'image_path',
    'collection',
    'gallery_link',
  ],
  methods: {
    getAlbumPath(album_path) {
      const name = album_path.replaceAll(/'/g,"-").replace(/[|&;$%@"<>()+,]/g, "").replaceAll(/ /g, '-').toLowerCase()
      return `/photos/${name}`;
    }
  },
}
</script>
