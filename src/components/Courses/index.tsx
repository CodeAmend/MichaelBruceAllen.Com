import React from "react"
import { Link } from 'gatsby';
import { ContentfulCourse as CCourse } from '../../../types/graphql-types';
import { NodeProps } from '../types';

import ContentfulRichText from '../contentfulRichText';
import { Wrapper, Items, Item } from '../styles';


const CourseComponent: React.FC<NodeProps<CCourse>> = ({ nodes }: NodeProps<CCourse>) => {
  return(
    <Wrapper>
      <h1>Courses</h1>
      <Items>
        {nodes.map((course: CCourse) => (
          <Link key={course.id} to={`/projects/${course.slug}`}>
            <Item key={course.id}>
              <h3>{course.name}</h3>
              <ContentfulRichText
                className="entry"
                document={course.summary?.json}
              />
            </Item>
          </Link>
        ))}
      </Items>
    </Wrapper>
  );
}

export default CourseComponent;
