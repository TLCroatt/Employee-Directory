import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";
import "../styles/SearchBox.css";

const SearchBox = () => {
    const { handleInputChange } = useContext(DataAreaContext);


    return (
        <div className="searchbox">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Search</span>
                
                <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <input
                    className='form-control mr-sm-2'
                    type='text'
                    placeholder='Search'
                    id='search'
                    onChange={handleInputChange}
                />
                </div>
        </div>
    )
}

export default SearchBox;