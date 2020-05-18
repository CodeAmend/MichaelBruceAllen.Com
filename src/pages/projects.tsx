import React from "react"
import { graphql } from 'gatsby';
import { Query } from '../../types/graphql-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/Projects'


export default ({ data }: { data: Query }) => (
 <Layout>
    <SEO title="Projects" />
    <Projects nodes={data.allContentfulProject.nodes} />
  </Layout>
)

export const query = graphql`
  query AllProjects {
    allContentfulProject {
      nodes {
        name
        github
        id
        projectUrl
        slug
        summary {
          json
        }
      }
    }
  }
`;
