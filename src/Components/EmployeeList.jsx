import React from "react";
import styles from "./EmployeeList.module.css"

function EmployeeList({ name, department, gender, role, sallery }) {
    return(
        <div className={styles.employee}>
            <h3>Name - { name }</h3>
            <h3>Departmen - { department }</h3>
            <h3>Gender - { gender }</h3>
            <h3>Role - { role }</h3>
            <h3>Sallery - { sallery }</h3>
        </div>
    )
}

export { EmployeeList }