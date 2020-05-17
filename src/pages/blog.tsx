import React from "react"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../components/Blog'


export default () => {
  return(
    <Layout>
      <SEO title="Blog" />
      <Blog />
    </Layout>
  )
}
