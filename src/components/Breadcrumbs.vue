<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb__list">
      <template v-for="crumb in crumbs" >
        <li class="breadcrumb__list__item">
          <a class="breadcrumb__link" :href="crumb.to">{{ crumb.text }}</a>
        </li>
        <span v-if="!crumb.active" class="breadcrumb__separator" aria-hidden="true"> / </span>
      </template>
    </ol>
  </nav>
</template>

<script>
  export default {
    computed: {
      crumbs() {
        // Get the current path and split into segments
        const pathArray = this.$route.path.split('/').filter(segment => segment !== '');
        const crumbs = [ { to: '/', text: 'Home' } ];
        let currentPath = '';

        pathArray.forEach((segment, index) => {
          currentPath += `/${segment}`;
        
          // Use a simple titleization for the text (e.g., 'my-page' becomes 'My Page')
          const text = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        
          crumbs.push({
            to: currentPath,
            text: text,
            active: index === pathArray.length - 1 // Last item is the current page, so it's not a link
          });
        });

        return crumbs;
      },
    }
  }
</script>
