import * as React from 'react';
import styled from 'styled-components';

import './layout.css';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Wrapper>
      <main>{children}</main>
      <footer>
        ©{new Date().getFullYear()} Michael Bruce Allen{' '}
      </footer>
    </Wrapper>
  );
};

export default Layout;
