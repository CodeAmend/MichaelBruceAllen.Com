import React from "react";
import ContentfulRichText from '../components/contentfulRichText';
import { TemplateProps } from "./types";
import { ContentfulCourse as CCourse } from '../../types/graphql-types';

import { Wrapper } from './styles'
import Layout from "../components/layout";


const CourseItemTemplate: React.FC<TemplateProps<CCourse>> = ({ pageContext }: TemplateProps<CCourse>) => {
  const { name, summary, bullets } = pageContext.node;

  return (
    <Layout>
      <Wrapper>
        <h2>{name}</h2>

        <ul>
          {bullets.map(bullet => (
            <li key={bullet}>* {bullet}</li>
          ))}
        </ul>

        <br />

        <ContentfulRichText
          className="Course"
          document={summary?.json}
        />

      </Wrapper>
    </Layout>
  );
}

export default CourseItemTemplate;

