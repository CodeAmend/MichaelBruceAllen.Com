import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';


const Nav = styled.nav`
  
  display: flex;
  justify-content: center;
`;
const Menu = styled.ul`
  display: flex;
`;

const Item = styled.li`
  & + & {
    margin-left: 0.5rem;
  }
`;


type MenuProps = {
  to: string;
  text: string;
}

const MenuItem: React.FC<MenuProps> = ({ to, text }: MenuProps) => {
  return (
    <Item>
      <Link to={to}>{text}</Link>
    </Item>
  );
}

const siteNav: React.FC = () => {
  return(
    <Nav>
      <Menu>
        <MenuItem to="/" text="Home" />
        <MenuItem to="/projects" text="Projects" />
        <MenuItem to="/skills" text="Skills" />
        <MenuItem to="/courses" text="Favorite Courses" />
        <MenuItem to="/blog" text="Blog" />
        <MenuItem to="/contact" text="Contact" />
      </Menu>
    </Nav>
  );
}

export default siteNav;
