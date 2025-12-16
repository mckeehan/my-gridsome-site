<template>
  <div class="d-flex flex-column h-100">
    <main class="flex-shrink-0">
      <header class="no-print">
        <SiteNavigation/>
        <Breadcrumbs/>
      </header>
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteNavigation from '~/components/SiteNavigation.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    SiteNavigation,
    Breadcrumbs,
    Footer
  }
}
</script>
