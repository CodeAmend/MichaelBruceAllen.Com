import React from "react"
import { Link } from 'gatsby';
import { ContentfulSkill as CSkill } from '../../../types/graphql-types';
import { NodeProps } from '../types';

import ContentfulRichText from '../contentfulRichText';
import { Wrapper, Items, Item } from '../styles';


const SkillsComponent: React.FC<NodeProps<CSkill>> = ({ nodes }: NodeProps<CSkill>) => {
  return(
    <Wrapper>
      <h1>Skills</h1>
      <Items>
        {nodes.map((skill: CSkill) => (
          <Link key={skill.id} to={`/projects/${skill.slug}`}>
            <Item key={skill.id}>
              <h3>{skill.name}</h3>
              <ContentfulRichText
                className="entry"
                document={skill.summary?.json}
              />
            </Item>
          </Link>
        ))}
      </Items>
    </Wrapper>
  );
}

export default SkillsComponent;
