<template>
    <Layout>
        Content:
        <div v-for="edge in $page.docs.edges" :key="edge.node.id">
            <g-link :to="edge.node.path"
                >{{ edge.node.title }} - {{ edge.node.id }}
            </g-link>
        </div>
    </Layout>
</template>

<page-query>
query Documentation {
  docs: allDocumentation {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: 'Hello, world!',
    },
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
