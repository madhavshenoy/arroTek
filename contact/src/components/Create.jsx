import { useState } from "react";
import axios from "axios";

function CreateContact() {

    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newContact = {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phoneNumber: input.phoneNumber
        }
        
        axios.post('http://localhost:3001/create', newContact)
    }


    return <div className='container'>
        <h1> Create Contact </h1>
        <div className="mx-auto">
            <form>
                <div className='form-group'>
                    <input onChange = {handleChange} name = "firstName" value={input.firstName} className = 'form-control' type = "text" placeholder=" First Name " /> 
                </div>
                <div className='form-group'>
                    <input onChange={handleChange} name="lastName" value={input.lastName} className='form-control' type="text" placeholder=" Last Name " />      
                </div>
                <div className='form-group'>
                    <input onChange = {handleChange} name = "email" value={input.email} className = 'form-control' type= "text" placeholder=" Email " />      
                </div>
                <div className='form-group'>
                    <input onChange = {handleChange} name = "phoneNumber" value={input.phoneNumber} className = 'form-control' type = "string" placeholder=" Phone Number " />     
                </div>
                <div classname = "col text-center">
                    <button onClick = {handleClick} className = "btn btn-outline-secondary"> ADD CONTACT </button>
                </div>
            </form>
        </div>
    </div>
}

export default CreateContact; 