<template>
  <div class="card-body">
    <g-link class="text-decoration-none link-dark stretched-link" :to="path">
      <b-icon icon="tag-fill" class="align-middle" font-scale="2"></b-icon>&nbsp;{{ name }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: [
    'path',
    'name'
  ]
}
</script>
