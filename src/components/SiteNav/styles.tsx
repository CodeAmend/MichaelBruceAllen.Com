import styled from 'styled-components';
import { Link } from 'gatsby';
import { MenuProps } from './types';


export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;
export const Menu = styled.ul`
  display: flex;
`;

export const Item = styled.li`
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
