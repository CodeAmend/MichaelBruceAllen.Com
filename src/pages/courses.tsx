import React from "react"
import { graphql } from 'gatsby';
import { Query } from '../../types/graphql-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Courses from '../components/Courses'


export default ({ data }: { data: Query })=> {
  return(
    <Layout>
      <SEO title="Courses" />
      <Courses nodes={data.allContentfulCourse.nodes} />
    </Layout>
  );
}

export const query = graphql`
  query AllCourses {
    allContentfulCourse {
      nodes {
        id
        name
        bullets
        slug
        summary {
          json
        }
      }
    }
  }
`;
