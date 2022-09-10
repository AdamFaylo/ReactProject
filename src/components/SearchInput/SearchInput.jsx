import React from "react";
import './search.css'

const SearchInput = () => {
  return (
    <div className="search_style">
      {/* <h1>hello world</h1> */}
      <div className="input-group md-form form-sm form-2 pl-0">
        <input
          className="form-control my-0 py-1 red-border"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="input-group-append">
          <span className="btn btn-info input-group-text red lighten-3" id="basic-text1">
            
              <i className="fas fa-search text-grey" aria-hidden="true">
                Click Here
              </i>
           
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
