import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";
import "../styles/SearchBox.css";

const SearchBox = () => {
    const { search, handleFormSubmit, handleInputChange } = useContext(DataAreaContext);

    return (
        <div className="searchbox">
           <label htmlFor='search'>Search:</label>
                <input
                    value={search}
                    name='search'
                    type='text'
                    placeholder='Search'
                    id='search'
                    onChange={handleInputChange}
                />
                <br />
                <button onClick={handleFormSubmit}>Search</button> 
        </div>
    )
}

export default SearchBox;