import { useState, useEffect } from "react";

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeError, setEmployeeError] = useState(null);
  const [employeeIsLoading, setEmployeeIsLoading] = useState(false);

  // Fetch all employees
  const fetchEmployees = async () => {
    setEmployeeIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/employees");
      const data = await response.json();
      console.log(data);
      setEmployees(data.data);
      return data.data;
    } catch (err) {
      setEmployeeError("Something went wrong fetching employees");
      console.error(err);
    } finally {
      setEmployeeIsLoading(false);
    }
  };

  // Create new employee
  const createEmployee = async (employeeData) => {
    setEmployeeIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/employee", {
        method: "POST",
        body: employeeData,
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    } finally {
      setEmployeeIsLoading(false);
    }
  };

  // Update employee
  const updateEmployee = async (employeeData) => {
    try {
      const response = await fetch(`http://localhost:3042/employee`, {
        method: "PUT",
        body: employeeData,
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/employee/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Get employee by ID
  const fetchEmployeeById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/employee/${id}`);
      const data = await response.json();
      return data.data;
    } catch (err) {
      console.error(err);
    }
  };

  // Initial fetch on load
  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    employees,
    fetchEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    fetchEmployeeById,
    employeeError,
    employeeIsLoading,
  };
};
