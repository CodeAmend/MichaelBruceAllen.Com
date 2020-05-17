import React from "react"

import { Nav, Menu, MenuItem } from './styles';


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
