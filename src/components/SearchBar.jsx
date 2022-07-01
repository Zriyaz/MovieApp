import React from "react";
import "./style.css";
import { Search } from "../icons/Search";

export const SearchBar = ({ value, setValue }) => {
  return (
    <div className="input_search">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="search"
        placeholder="Search..."
      />
      ;
      <span className="search_icon">
        <Search />
      </span>
    </div>
  );
};
