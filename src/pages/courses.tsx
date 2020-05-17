import React from "react"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Courses from '../components/Courses'


export default ()=> {
  return(
    <Layout>
      <SEO title="Courses" />
      <Courses />
    </Layout>
  );
}
