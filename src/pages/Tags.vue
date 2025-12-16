// Lists all available tags
// ============================================
<template>
  <Layout>
    <div class="tags-index">
      <h1>All Tags</h1>
      <p class="count">{{ $page.allTag.totalCount }} {{ $page.allTag.totalCount === 1 ? 'tag' : 'tags' }}</p>
      
      <div class="tag-cloud">
        <g-link 
          v-for="tag in $page.allTag.edges" 
          :key="tag.node.id"
          :to="tag.node.path"
          class="tag"
        >
          {{ tag.node.id }}
          <span class="tag-count">{{ tag.node.belongsTo.totalCount }}</span>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allTag {
    totalCount
    edges {
      node {
        id
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'All Tags'
  }
}
</script>

<style scoped>
.tags-index {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.count {
  color: #666;
  margin-bottom: 2rem;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tag {
  background: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  text-decoration: none;
  color: #333;
  transition: all 0.2s;
}

.tag:hover {
  background: #42b983;
  color: white;
  transform: translateY(-2px);
}

.tag-count {
  margin-left: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.85rem;
}
</style>

// ============================================
