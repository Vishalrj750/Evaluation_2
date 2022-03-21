import React from "react";

function DashboardInput({ handleClick }) {
    const [name, setName] = React.useState("")
    const [department, setDepartment] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [role, setRole] = React.useState("")
    const [sallery, setSallery] = React.useState("")
    return(
        <div>
            <input type="text" placeholder="Name"  onChange={ (e) => setName(e.target.value) }/>
            <br />
            <input type="text" placeholder="department"  onChange={ (e) => setDepartment(e.target.value) }/>
            <br />
            <input type="text" placeholder="gender"  onChange={ (e) => setGender(e.target.value) }/>
            <br />
            <input type="text" placeholder="role"  onChange={ (e) => setRole(e.target.value) }/>
            <br />
            <input type="text" placeholder="sallery"  onChange={ (e) => setSallery(e.target.value) }/>
            <br />
            <button onClick={ () => handleClick(name, department, gender, role, sallery) }>ADD EMPLOYEE</button>
        </div>
    )
}

export { DashboardInput }