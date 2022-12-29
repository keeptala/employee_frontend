import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {


    const { id } = useParams();

    const navigate = useNavigate();

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response) => {
            navigate("/employeeList")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data); 
            } catch (error) {
                console.log(error);
            }
        }
      fetchData();  
    }, [id])

    return(
         <div className=" flex max-w-2xl shadow border-b mx-auto justify-center">
      <div className=" px-8 py-8">
        <div className=" font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
        </div>
        <div className=" items-center justify-center h-14 w-full my-4">
          <label className=" block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            name="firstName"
            value={employee.firstName}
            type={"text"}
            onChange={(e) => handleChange(e)}
            className=" h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className=" items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal ">
            Last Name
          </label>
          <input
            name="lastName"
            value={employee.lastName}
            type={"text"}
            onChange={(e) => handleChange(e)}
            className=" h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className=" items-center justify-center h-14 w-full my-4">
          <label className=" block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            name="emailId"
            value={employee.emailId}
            type={"text"}
            onChange={(e) => handleChange(e)}
            className=" h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className=" items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateEmployee}
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          >
            Update
          </button>
          <button
          onClick={ () => navigate("/employeeList")} 
           className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            cancel
          </button>
        </div>
      </div>
    </div>
    )
}

export default UpdateEmployee