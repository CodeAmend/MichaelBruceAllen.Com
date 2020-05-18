import React from "react"
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/Projects'
import { AllProjectsQuery } from '../../types/graphql-types';


type AllProjectsProps = {
  data: AllProjectsQuery;
}

export default ({ data }: AllProjectsProps) => (
 <Layout>
    <SEO title="Projects" />
    <Projects projects={data.allContentfulProject.nodes} />
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
