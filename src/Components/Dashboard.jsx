import React from "react";
import { DashboardInput } from "./DashboardInput";
import { EmployeeList } from "./EmployeeList";

function Dashboard() {
    const [data, setData] = React.useState([])


    React.useEffect(() => {
        fetch('http://localhost:3001/details')
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err))
    }, [])

    const handleAdd = ( name, department, gender, role, sallery ) => {
        const payLoad = {
            name,
            department,
            gender,
            role,
            sallery
        }

        const payLoadJson = JSON.stringify(payLoad)

        fetch('http://localhost:3001/details', {
            method: "POST",
            body: payLoadJson,
            headers: {
                "content-type": "application/json"
            }
        }).then((res) => res.json())
        .then((res) => {
            getData(res)
        })
        .catch((err) => console.log(err))


    }

    const getData = (res) => {
        setData([...data, res])
    }

    return(
        <div>
            <DashboardInput handleClick={ handleAdd } />
            { data.map((item) => <EmployeeList key={item.id} name={item.name} department={item.department} role={item.role} gender={item.gender} sallery={item.sallery} /> ) }
        </div>
    )
}

export { Dashboard }