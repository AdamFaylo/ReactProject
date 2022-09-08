import React from "react";
import {
  Dropdown,
  DropdownButton,
  Navbar,
  NavDropdown,
  NavItem,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/movies-slice";

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
    const dispatch = useDispatch()
    const changeCategory = (category) =>  dispatch(fetchMovies(category)) 
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Movies
      </Dropdown.Toggle>
      <Dropdown.Menu className="btn-dropdown">
        <Dropdown.Item onClick={() => changeCategory('')}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('36')}>Action</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('16')}>Horror</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('6')}>Drama</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('26')}>Comedy</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('36')}>Action</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('16')}>Horror</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('6')}>Drama</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('26')}>Comedy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
