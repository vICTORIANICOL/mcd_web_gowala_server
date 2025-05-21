import { useFetchEmployees } from "../../hooks/useFetchEmployees";
import EmployeeCard from "../employeeCard/EmployeeCard";
import styles from "./employeesMap.module.css";

export default function EmployeesMap() {
  const { employees, employeeIsLoading, employeeError } = useFetchEmployees();

  if (employeeIsLoading) return <p>loading...</p>;

  if (employeeError) return <p>Error loading employees: {employeeError}</p>;

  return (
    <section className={styles.gridWrapper}>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))
      ) : (
        <p>No employees available.</p>
      )}
    </section>
  );
}
