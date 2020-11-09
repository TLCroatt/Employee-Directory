import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";
import DataAreaContext from "../utils/DataAreaContext";
import SearchBox from "./SearchBox";


//put in a functional component
const DataArea = () => {
    const [employees, setEmployees] = useState([{}]);
    const [filteredEmployees, setFilteredEmployees] = useState([{}]);
    const [sortEmployees, setSortEmployees] = useState("ascending");
    const [headings, setHeadings] = useState([
        { name: "Image", width: "10%" },
        { name: "Name", width: "20%" },
        { name: "Phone", width: "10%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" }
    ]);
    
    useEffect(() => {
        console.log("hello")
        API.getEmployees()
            .then(res => {
                setEmployees(res.data.results);
                //setFilteredEmployees(res.data.results)
            }).catch(err => {console.log(err)}); 
    }, []);

    const handleSort = () => {
        if (sortEmployees === "ascending") {
            filteredEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1 : (a.name.first === b.name.first) ? ((a.name.last > b.name.last) ? 1 : -1) :-1);
            setSortEmployees("descending");
        } else {
            filteredEmployees.sort((a, b) => (a.name.first < b.name.first) ? 1 : (a.name.first === b.name.first) ? ((a.name.last < b.name.last) ? 1 : -1) : -1);
            setSortEmployees("ascending");
        }

    }

    const handleInputChange = (e) => {
        const { value } = e.target;
        setFilteredEmployees(value);
    }

return (
   <DataAreaContext.Provider value={{ employees, filteredEmployees, sortEmployees, headings, handleInputChange, handleSort}}>
        <Nav />
        <div className="data-area">{employees.filteredEmployees.length > 0 ? <DataTable /> : <div></div>}</div>
        <SearchBox />
        <DataTable />
    </DataAreaContext.Provider>
)
}

//set state for sorting table (could be a boolean/toggle)
//set state for filter(search) - this updates every time you run a search - will be set to same value as ^


export default DataArea;