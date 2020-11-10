import React from "react";

const DataAreaContext = React.createContext({
    employees: [{}],
    filteredEmployees: [{}],
    sortEmployees: "",
    headings: [{}],
    handleInputChange: () => {},
    handleSort: () => {},
});

export default DataAreaContext;