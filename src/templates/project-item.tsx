import React from "react";
import { Link } from 'gatsby';
import { ContentfulProject } from '../../types/graphql-types';
import { TemplateProps } from './types';

import ContentfulRichText from '../components/contentfulRichText';
import { Wrapper } from './styles'
import Layout from "../components/layout";


const ProjectItemTemplate: React.FC<TemplateProps<ContentfulProject>> = ({ pageContext }: TemplateProps<ContentfulProject>) => {
  const { name, github, projectUrl, summary, skills } = pageContext.node;

  return (
    <Layout>
      <Wrapper>
        <h2>{name}</h2>
        <p>{projectUrl}</p>
        <p>{github}</p>

        <ContentfulRichText
          className="skills"
          document={summary?.json}
        />

        <ul>
        {skills?.map(skill => (
          <li key={skill?.id}>
            <Link to={`/skills/${skill?.slug}`}>
              {skill?.name}
            </Link>
          </li>
        ))}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default ProjectItemTemplate;
