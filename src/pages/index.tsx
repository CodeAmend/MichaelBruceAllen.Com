import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import SiteNav from '../components/siteNav';


const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <SiteNav />
    </Layout>
  )
};

export default IndexPage;
