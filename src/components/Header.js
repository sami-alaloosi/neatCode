/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import SmallMenu from "./SmallMenu";

function Header({ componentName }) {
  const [activeItem, setActiveItem] = useState(componentName);

  const { push } = useHistory();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    push(`/${name}`);
  };

  const logOut = () =>{
    localStorage.clear()
    push("/")
}
  return (
    <div>
      <div className="header">
        <Menu pointing vertical>
          <Menu.Item
            name="Questions"
            active={activeItem === "Questions"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Todos"
            active={activeItem === "Todos"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Notes"
            active={activeItem === "Notes"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Jobs"
            active={activeItem === "Jobs"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Log Out"
            active={activeItem === "Out"}
            onClick={logOut}
            
          />
        </Menu>
      </div>
      <SmallMenu />
    </div>
  );
}

export default Header;
