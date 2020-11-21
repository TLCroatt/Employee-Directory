import React from "react";
import SearchBox from "./SearchBox";
import "../styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Filter or Search by Name</p>
            <SearchBox />
        </div>
    )
}

export default Header;