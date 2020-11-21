import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";

const DataBody = () => {
    const { filteredEmployees } = useContext(DataAreaContext);


const formatDate = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
}

return (
    <tbody>
        { filteredEmployees[0] !== undefined && filteredEmployees[0].name !== undefined ? (filteredEmployees.map(({ login, name, picture, phone, email, dob }) => {
            return (
                <tr key={login.uuid}>
                    <td data-header="Image" className="align-middle">
                        <img src={picture.medium} alt={"profile image for" + name.first + " " + name.last} />
                    </td>
                    <td data-header="Name" className="name-cell align-middle">
                        {name.first} {name.last}
                    </td>
                    <td data-header="Phone" className="align-middle">
                        {phone}
                    </td>
                    <td data-header="Email" className="align-middle">
                        {email}
                    </td>
                    <td data-header="DOB">
                        {formatDate(dob.date)}
                    </td>
                </tr>
            )
        })
    ) : (
        <></>
    )}
    </tbody>
    );
};

export default DataBody;
