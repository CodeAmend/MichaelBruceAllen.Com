import React from "react"
import { Link } from 'gatsby';
import { ContentfulProject as CProject } from '../../../types/graphql-types';
import { NodeProps } from '../types';

import ContentfulRichText from '../contentfulRichText';
import { Wrapper, Items, Item } from '../styles';



const ProjectsComponent: React.FC<NodeProps<CProject>> = ({ nodes }: NodeProps<CProject>) => {
  return(
    <Wrapper>
      <h1>Projects</h1>
      <Items>
        {nodes.map((project: CProject) => (
          <Link key={project.id} to={`/projects/${project.slug}`}>
            <Item key={project.id}>
              <h3>{project.name}</h3>
              <ContentfulRichText
                className="entry"
                document={project.summary?.json}
              />
            </Item>
          </Link>
        ))}
      </Items>
    </Wrapper>
  );
}

export default ProjectsComponent;
