const query = require('./src/gatsby/query');
const path = require('path');


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;


  /************
   * Projects *
   ************/
  const projectItemTemplate = path.resolve(`src/templates/project-item.tsx`);
  const projectQuery = await graphql(query.data.project);
  const projects = projectQuery.data.allContentfulProject.edges;

  projects.forEach(({ node }, i) => {
    const next = i === projects.length - 1
      ? null
      : projects[i + 1].node;

    const prev = i === 0
      ? null
      : projects[i - 1].node;

    createPage({
      path: `/projects/${node.slug}`,
      component: projectItemTemplate,
      context: {
        prev,
        next,
        node,
      }
    });
  });



  /************
   *  Skills  *
   ************/
  const skillItemTemplate = path.resolve(`src/templates/skill-item.tsx`);
  const skillQuery = await graphql(query.data.skill);
  const skills = skillQuery.data.allContentfulSkill.edges;

  skills.forEach(({ node }, i) => {
    const next = i === skills.length - 1
      ? null
      : skills[i + 1].node;

    const prev = i === 0
      ? null
      : skills[i - 1].node;

    createPage({
      path: `/skills/${node.slug}`,
      component: skillItemTemplate,
      context: {
        prev,
        next,
        node,
      }
    });
  });



  /*************
   *  Courses  *
   *************/
  const courseItemTemplate = path.resolve(`src/templates/course-item.tsx`);
  const courseQuery = await graphql(query.data.course);
  const courses = courseQuery.data.allContentfulCourse.edges;

  courses.forEach(({ node }, i) => {
    const next = i === courses.length - 1
      ? null
      : courses[i + 1].node;

    const prev = i === 0
      ? null
      : courses[i - 1].node;

    createPage({
      path: `/courses/${node.slug}`,
      component: courseItemTemplate,
      context: {
        prev,
        next,
        node,
      }
    });
  });
}
