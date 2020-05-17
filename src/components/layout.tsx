import * as React from 'react';
import styled from 'styled-components';

import './layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.section`
  width: 100vw;
  max-width: 100%;
`;

const Main = styled.main`
  height: 100vh;
`;

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <footer>
        ©{new Date().getFullYear()} Michael Bruce Allen{' '}
      </footer>
    </Wrapper>
  );
};

export default Layout;
