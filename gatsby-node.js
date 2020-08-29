exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allMerchantJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("Error retrieving data", data.errors)
    return
  }

  const merchTemplate = require.resolve("./src/template/stores.js")

  data.data.allMerchantJson.edges.forEach(edge => {
    createPage({
      path: `/stores/${edge.node.slug}/`,
      component: merchTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
