import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";
import "../styles/SearchBox.css";

const SearchBox = () => {
    const { handleInputChange } = useContext(DataAreaContext);


    return (
        <div className="searchbox">
           <label htmlFor='search'>Search:</label>
                <input
                    name='search'
                    type='text'
                    placeholder='Search'
                    id='search'
                    onChange={handleInputChange}
                />
        </div>
    )
}

export default SearchBox;