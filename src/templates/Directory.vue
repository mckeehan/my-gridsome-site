<template>
  <Layout>
    <h2>{{ title }}</h2>
    {{ $page.directory.path }}
    <ul v-for="subdir in $page.subFolders?.edges">
      <li>{{ subdir.node.id }}</li>
    </ul>
    <ul v-for="page in $page.directory.children">
      <li>{{ page.title }}</li>
    </ul>
  </Layout>
</template>

<page-query>
query ($id: ID!, $subFolderRegex: String!) {
  directory(id: $id) {
    id
    path
    children {
        id
        title
        path
        date(format: "MMMM D, YYYY")
        excerpt
        featuredImage
        featuredImageCaption
    }
  }

  subFolders: allDirectory (
    filter: {
      path: { regex: $subFolderRegex }
    }
  ) {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    title() {
      return this.$page.directory.id || "Home";
    }
  }
}
</script>
