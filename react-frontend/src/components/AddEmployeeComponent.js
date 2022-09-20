import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function AddEmployeeComponent() {

    let navigate =useNavigate();

    const [employee,setEmployees] =useState({
        firstName:"",
        lastName:"",
        emailId:""
    });

    const{firstName,lastName,emailId} = employee;

    const onInputChange=(e)=>{
        setEmployees({...employee,[e.target.name]:e.target.value});
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/create",employee);
        navigate("/")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-2 mt-2 shadow">
                    <h2 className="text-center m-6">Create employee</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-4">
                        <label htmlFor='first name' className='form-label'>
                            First Name
                        </label>
                        <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter First Name"
                        name='firstName'
                        value={firstName}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='last name' className='form-label'>
                            Last Name
                        </label>
                        <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter Last Name"
                        name='lastName'
                        value={lastName}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor='email name' className='form-label'>
                            E-mail adress
                        </label>
                        <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter e-mail adress"
                        name='emailId'
                        value={emailId}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link to = "/"  className='btn btn-outline-danger mx-2'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>   
    );
    
}

