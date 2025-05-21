import styles from "./employeeCard.module.css";

export default function EmployeeCard({ employee }) {
  return (
    <div className={styles.cardOuter}>
      <div className={styles.cardInner}>
        <img
          src={employee.image}
          alt={employee.name}
          className={styles.employeeImage}
        />
        <div className={styles.overlay}>
          <p className={styles.text}>{employee.text}</p>
          <p className={styles.name}>{employee.name}</p>
        </div>
      </div>
    </div>
  );
}
