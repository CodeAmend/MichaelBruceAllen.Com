const query = require('./src/gatsby/query');
const path = require('path');


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;


  /************
   * Projects *
   ************/
  const projectItemTemplate = path.resolve(`src/templates/project-item.tsx`);
  const projectQuery = await graphql(query.data.project);
  const projects = projectQuery.data.allContentfulProject.edges;

  projects.forEach(({ node }, i) => {
    const next = i === projects.length - 1
      ? null
      : projects[i + 1].node;

    const prev = i === 0
      ? null
      : projects[i - 1].node;

    createPage({
      path: `/projects/${node.slug}`,
      component: projectItemTemplate,
      context: {
        prev,
        next,
        node,
      }
    });
  });
}
