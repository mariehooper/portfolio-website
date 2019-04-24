const slugify = require("@sindresorhus/slugify")
const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "ProjectsJson") {
    actions.createNodeField({
      node,
      name: "slug",
      value: `/${slugify(node.name, { decamelize: false })}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            headerImg
            projectImage1
            projectImage2
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const edges = result.data.allProjectsJson.edges
  edges.forEach(({ node }, index) => {
    const nextIndex = index === edges.length - 1 ? 0 : index + 1
    const previousIndex = index === 0 ? edges.length - 1 : index - 1
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/project-page.js"),
      context: {
        slug: node.fields.slug,
        next: edges[nextIndex].node.fields.slug,
        previous: edges[previousIndex].node.fields.slug,
        headerImg: node.headerImg,
        projectImage1: node.projectImage1,
        projectImage2: node.projectImage2,
      },
    })
  })
}
