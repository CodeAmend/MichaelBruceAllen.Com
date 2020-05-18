import React from "react";
import ContentfulRichText from '../components/contentfulRichText';
import { TemplateProps } from "./types";
import { ContentfulCourse as CCourse } from '../../types/graphql-types';

import { Wrapper } from './styles'
import Layout from "../components/layout";


const SkillItemTemplate: React.FC<TemplateProps<CCourse>> = ({ pageContext }: TemplateProps<CCourse>) => {
  const { name, summary, bullets } = pageContext.node;

  console.log(bullets)

  return (
    <Layout>
      <Wrapper>
        <h2>{name}</h2>

        <ContentfulRichText
          className="skill"
          document={summary?.json}
        />

      </Wrapper>
    </Layout>
  );
}

export default SkillItemTemplate;

