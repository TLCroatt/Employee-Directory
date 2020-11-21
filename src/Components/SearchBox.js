import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";
import "../styles/SearchBox.css";

const SearchBox = () => {
    const { handleInputChange } = useContext(DataAreaContext);


    return (
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Search</span>
                </div>
                <input
                    className='form-control mr-sm-2'
                    type='serach'
                    placeholder='Name'
                    aria-label='search'
                    onChange={e => handleInputChange(e)}
                />
                </div>
        </div>
    )
}

export default SearchBox;