import { useEffect, useState } from "react";

function Contacts() {

    const [contacts, setContacts] = useState([{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }])

    useEffect(() => {
        fetch("/create").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setContacts(jsonRes))
    })



    return <div className='container'>
        <h1> Contacts </h1>
            <div className = "tablew"> 
                <table className = "table table-bordered table-hover table-dark">
                    <thead className = "head">
                        <tr>
                            <th scope = "col"> First Name </th>
                            <th scope = "col"> Last Name </th>
                            <th scope = "col"> Email Address </th>
                            <th scope = "col"> Phone Number </th>
                        </tr>
                    </thead>
                {contacts.map(contact =>
                    <tbody className = "tableBody">
                        <tr>
                            <th scop="row"> {contact.firstName} </th>
                            <td scop="row"> {contact.lastName} </td>
                            <td scop="row"> {contact.email} </td>
                            <td scop="row"> {contact.phoneNumber} </td>
                        </tr>
                    </tbody>
                )}
                </table>
            </div>


    </div>
}

export default Contacts; 