import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/movies-slice";
import { Link } from "react-router-dom";
import "../components/CssControls/dropDown.css"

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
    const changeCategory = (category) =>  dispatch(fetchMovies({category,page:1})) 
  return (
    <div>
    <Dropdown className="d_down">
      <Link to="/movies">
        <Dropdown.Toggle variant="none" style={{border:'none',padding:'8px'}}>
          Movies
        </Dropdown.Toggle>
      </Link>
      <Dropdown.Menu className="d_menu">        
        <Dropdown.Item onClick={() => changeCategory('')}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('28')}>Action</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('12')}>Adventure</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('16')}>Animation</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('35')}>Comedy</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('80')}>Crime</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('99')}>Documentary</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('10751')}>Family</Dropdown.Item>
        <Dropdown.Item onClick={() => changeCategory('14')}>Fantasy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
   
  );
};

export default DropDown;
