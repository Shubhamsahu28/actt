import React from 'react';
import "./Search.scss";

const Search = () => {
  return (
    <div className="input-group" style={ { width: "300px" } }>
    <div className="form-outline">
      <input type="search" id="form1" className="form-control" style={{ height: "35px" }} placeholder='Search...' />
      {/* <label className="form-label" htmlFor="form1" style={{ position: "absolute", top: "8px", right: "100px", color: "black" }} >Search</label> */}
    </div>
    <button type="button" className="btn btn-primary" style={{ height: "35px" }}>
      <i className="fa fa-search" style={{ height: "40px" }}></i>
    </button>
  </div>
  )
}

export default Search