import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, set] = useState({})  // State variable for current ticket object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of employeeId changes
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                {/* <div className="employee__name">{employee.name}</div> */}
                <div className="employee__specialty">has a specialty of {employee.specialty}'s</div>
            </section>
        </>
    )
}