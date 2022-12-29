import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {

  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  }

  return (
    <tr key={employee.id}>
      <td className=" whitespace-nowrap px-6 py-4 text-left">
        <div className=" text-lg  text-gray-500">{employee.firstName}</div>
      </td>
      <td className=" whitespace-nowrap px-6 py-4 text-left">
        <div className=" text-lg text-gray-500">{employee.lastName}</div>
      </td>
      <td className=" whitespace-nowrap py-4 text-left">
        <div className=" text-lg text-gray-500">{employee.emailId}</div>
      </td>
      <td className=" whitespace-nowrap text-right font-normal text-lg px-6 py-4 ">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className=" text-indigo-400 hover:text-indigo-700 px-4 hover:cursor-pointer "
        >
          edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className=" text-red-400 hover:text-red-700 hover:cursor-pointer"
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
