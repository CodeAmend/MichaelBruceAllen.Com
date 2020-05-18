import React from "react";
import { PageProps } from "gatsby";
import { ContentfulSkill } from '../../types/graphql-types';
import ContentfulRichText from '../components/contentfulRichText';


import { Wrapper } from './styles'
import Layout from "../components/layout";


interface SkillPageProps extends PageProps {
  pageContext: {
    prev: ContentfulSkill | null;
    next: ContentfulSkill | null;
    node: ContentfulSkill;
  }
}

const SkillItemTemplate: React.FC<SkillPageProps> = ({ pageContext }: SkillPageProps) => {
  const { name, category, summary } = pageContext.node;

  return (
    <Layout>
      <Wrapper>
        <h2>{name}</h2>
        <p>{category}</p>

        <ContentfulRichText
          className="skill"
          document={summary?.json}
        />

      </Wrapper>
    </Layout>
  );
}

export default SkillItemTemplate;
