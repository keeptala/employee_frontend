import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if(employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        })
      }
    })
  }

  return (
    <div className=" container mx-auto my-6">
      <div className=" h-12">
        <button
          onClick={() => {
            navigate("/addEmployee");
          }}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add Employee
        </button>
      </div>
      <div className=" flex shadow border-b mt-3">
        <table className=" min-w-full">
          <thead className=" bg-gray-50">
            <tr>
              <th className=" text-left font-medium text-gray-500 uppercase tracking-wider px-2 py-4">
                firstName
              </th>
              <th className=" text-left font-medium text-gray-500 uppercase tracking-wider px-2 py-4">
                lastName
              </th>
              <th className=" text-left font-medium text-gray-500 uppercase tracking-wider px-2 py-4">
                emailId
              </th>
              <th className=" text-right font-medium text-gray-500 uppercase tracking-wider py-4 pr-12">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className=" bg-white">
              {employees.map((employee) => (
                <Employee employee= {employee} deleteEmployee = {deleteEmployee} key={employee.id}></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
