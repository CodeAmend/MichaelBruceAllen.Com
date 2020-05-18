import React from "react"
import { Link } from 'gatsby';
import { ContentfulProject } from '../../../types/graphql-types';

import ContentfulRichText from '../contentfulRichText';
import { Projects, Project } from './styles';


type ProjectProps = {
  projects: Array<ContentfulProject>
}

const ProjectsComponent: React.FC<ProjectProps> = ({ projects }: ProjectProps) => {
  return(
    <Projects>
      {projects.map((project: ContentfulProject) => (
        <Link key={project.id} to={`/projects/${project.slug}`}>
          <Project key={project.id}>
            <h2>{project.name}</h2>
            <ContentfulRichText
              className="entry"
              document={project.summary?.json}
            />
          </Project>
        </Link>
      ))}
    </Projects>
  );
}

export default ProjectsComponent;
