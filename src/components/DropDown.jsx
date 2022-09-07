import React from "react";
import {
  Dropdown,
  DropdownButton,
  Navbar,
  NavDropdown,
  NavItem,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const DropDown = ({ options }) => {
  // [{action,title,value?}] // Horror value = 30

  return (
    <select
      className="m-dropdown"
      onChange={(e) => {
        const selected = e.target.value;
        const selectedOption = options.find(
          (option) => option.title === selected || option.value === selected
        );
        if (selectedOption) selectedOption.action(selected);
      }}
    >
      {options.map((option) => (
        <option
          className="m-dropdown-option"
          key={option.title}
          value={option.value ?? option.title}
        >
          {option.title}
        </option>
      ))}
    </select>
  );
};

export const DropDown2 = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Dropdown
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
