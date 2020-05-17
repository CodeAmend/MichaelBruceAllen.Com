import * as React from 'react';
import styled from 'styled-components';
import SiteNav from './SiteNav';

import './layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.main`
  width: 100vw;
  max-width: 100%;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Wrapper>
        {children}
        <SiteNav />
      </Wrapper>
      <footer>
        ©{new Date().getFullYear()} Michael Bruce Allen{' '}
      </footer>
    </>
  );
};

export default Layout;
