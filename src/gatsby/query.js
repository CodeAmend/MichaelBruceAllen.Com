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
  skill: ` {
    allContentfulSkill {
      edges {
        node {
          id
          name
          slug
          category
          summary {
            json
          }
        }
      }
    }
  }`,
  course: ` {
    allContentfulCourse {
      edges {
        node {
          id
          name
          slug
          bullets

          summary {
            json
          }
        }
      }
    }
  }`,
}
