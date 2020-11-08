import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";
import DataAreaContext from "../utils/DataAreaContext";


//put in a functional component
const DataArea = () => {
    const [employees, setEmployeesState] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [sortEmployees, setSortEmployees] = useState(false);

    useEffect(() => {
        console.log("hello")
        API.getEmployees().then(results => {
            console.log(results.data)
            setEmployeesState({
                ...employees,
                employees: results.data
            })

        })
    }, []);
return (
    <div></div>
)
}

//set state for sorting table (could be a boolean/toggle)
//set state for filter(search) - this updates every time you run a search - will be set to same value as ^



//useEffect moves data from API and stores it into state - this will have the API call

//return DataTable which will render DataBody

export default DataArea;