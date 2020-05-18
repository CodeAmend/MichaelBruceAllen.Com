module.exports.data = {
  project: `{
    allContentfulProject {
      edges {
        node {
          id
          slug
          name
          projectUrl
          github

          summary {
            json
          }

          skills {
            id
            name
            slug
          }
        }
      }
    }
  }`,
}
