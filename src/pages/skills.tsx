import React from "react"
import { graphql } from 'gatsby';
import { Query } from '../../types/graphql-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Skills from '../components/Skills'


export default ({ data }: { data: Query }) => {
  return(
    <Layout>
      <SEO title="Skills" />
      <Skills nodes={data.allContentfulSkill.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query AllSkills {
    allContentfulSkill {
      nodes {
        id
        name
        category
        slug
        summary {
          json
        }
      }
    }
  }
`;
