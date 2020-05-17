import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MenuProps } from './types';


export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;

  background-color: #fafafa;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  height: 2rem;
  padding: 0 0.5rem;

  border: 1px solid #00000020;
  border-radius: 1px;

  &:hover {
    background-color: #f0f0f0;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

export const MenuItem: React.FC<MenuProps> = ({ to, text }: MenuProps) => {
  return (
    <Item>
      <Link to={to}>{text}</Link>
    </Item>
  );
}
