import React from "react"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/Projects'


export default () => {
  return(
    <Layout>
      <SEO title="Projects" />
      <Projects />
    </Layout>
  )
}
