import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";
import DataAreaContext from "../utils/DataAreaContext";


//put in a functional component
const DataArea = () => {
    const [employees, setEmployees] = useState([{}]);
    const [filteredEmployees, setFilteredEmployees] = useState([{}]);
    const [sortEmployees, setSortEmployees] = useState(false);
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
                setFilteredEmployees(res.data.results)
            }).catch(err => {console.log(err)}); 
    }, []);

        
        
        

    

return (
   /* <DataAreaContext.Provider value={{ employeeState, handleInputChange, handleSort}}>
        <Nav />
<div className="data-area">{employeeState.filteredEmployees.length > 0 ? <DataTable /> : <div></div>}</div>
    </DataAreaContext.Provider>
)*/
<div>
    <DataTable />
</div>
)
}

//set state for sorting table (could be a boolean/toggle)
//set state for filter(search) - this updates every time you run a search - will be set to same value as ^


export default DataArea;