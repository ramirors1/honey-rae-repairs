import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const HireForm = () => {

    const [employee, updateEmployee] = useState();
    const history = useHistory()
    const saveEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
    return fetch("http://localhost:8088/employees", fetchOption)
        .then(() => {
          history.push("/employees")  
        })    
    }    

    return (
        <>
        <form className="hireForm">
            <h2 className="hireForm__title">New Employee</h2>
            <fieldset>
            <div className="hireForm-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.name = evt.target.value
                            updateEmployee(copy)
                        }
                    }

                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        />
                </div>
                <div className="hireForm-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.specialty = evt.target.value
                            updateEmployee(copy)
                        }
                    }

                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of experience"
                        />
                </div>
            </fieldset>
            <button onClick={saveEmployee} className="btn btn-primary">
                Finish Hiring
            </button>
        </form>
        </>
    )

}    
