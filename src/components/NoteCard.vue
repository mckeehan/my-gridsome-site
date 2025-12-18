<template>
  <div class="col-lg-4 mb-5">
    <div class="notecardcomponent card h-100 shadow border-0">
      <g-image v-if="featuredImage" loading="lazy" class="card-img-top" :src="featuredImage" alt="" />
      <div class="card-body p-4">
        <div class="badge bg-primary bg-gradient rounded-pill mb-2">{{ collection }}</div>
        <g-link class="text-decoration-none link-dark stretched-link" :to="path"><div class="h5 card-title mb-3">{{ title }}</div></g-link>
        <p class="card-text mb-0">{{ excerpt }}</p>

            <div className="ms-3" v-if="tags">
              <div class="tags">
                <g-link 
                  v-for="tag in tags" 
                  :key="tag.id" 
                  :to="tag.path"
                  class="tag"
                >
                  {{ tag.id }}
                </g-link>
              </div>
            </div> 

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
