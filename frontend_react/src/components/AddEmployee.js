import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const reset = (e) => {
    e.preventDefault();
    setEmployee(
      {
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
      }
    )
  }

  return (
    <div className=" flex max-w-2xl shadow border-b mx-auto justify-center">
      <div className=" px-8 py-8">
        <div className=" font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
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
            onClick={saveEmployee}
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          >
            save
          </button>
          <button
          onClick={reset}
           className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
