import React from "react";
import { Link } from 'gatsby';
import { PageProps } from "gatsby";
import { ContentfulProject } from '../../types/graphql-types';
import ContentfulRichText from '../components/contentfulRichText';


import { Wrapper } from './styles'


interface ProjectPageProps extends PageProps {
  pageContext: {
    prev: ContentfulProject | null;
    next: ContentfulProject | null;
    node: ContentfulProject;
  }
}

const ProjectItemTemplate: React.FC<ProjectPageProps> = ({ pageContext }: ProjectPageProps) => {
  const { name, github, projectUrl, summary, skills } = pageContext.node;

  return (
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
  )

}

export default ProjectItemTemplate;
