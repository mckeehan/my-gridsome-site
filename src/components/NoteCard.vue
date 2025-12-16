<template>
  <div class="col-lg-4 mb-5">
    <div class="notecardcomponent card h-100 shadow border-0">
      <g-image v-if="featuredImage" loading="lazy" class="card-img-top" :src="featuredImage" alt="" />
      <div class="card-body p-4">
        <div class="badge bg-primary bg-gradient rounded-pill mb-2">{{ collection }}</div>
        <g-link class="text-decoration-none link-dark stretched-link" :to="path"><div class="h5 card-title mb-3">{{ title }}</div></g-link>
        <p class="card-text mb-0">{{ excerpt }}</p>
      </div>
      <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
        <div class="d-flex align-items-end justify-content-between">
          <div class="d-flex align-items-center">
            <g-image v-if="author?.avatar" class="rounded-circle me-3 avatar-image" width="40" height="40" :src="author.avatar" :alt="author"/>
            <div class="small">
              <div v-if="author?.name" class="fw-bold">{{ author.name }}</div>
              <div class="text-muted">{{ date }}</div>
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
    'path',
    'featuredImage',
    'collection',
    'title',
    'excerpt',
    'author',
    'avatar',
    'date',
    'tags',
    'author'
  ]
}
</script>

<style scoped>
.meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.meta time {
  color: #999;
  font-size: 0.9rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #e0e0e0;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #666;
}
</style>

