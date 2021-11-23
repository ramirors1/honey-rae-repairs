import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Tickets.css"


export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()
    const getAllTickets = () => {
        return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
        .then((data) => {
            updateTickets(data)
        })
       } 


    useEffect(
        () => {getAllTickets()
                
        },
        []
    )
            const deleteTicket = (id) => {
                fetch(`http://localhost:8088/serviceTickets/${id}`, {
                method: "DELETE"
            })
            getAllTickets()

        }
        //    const getAllTickets = () => {
        //     return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        //     .then(res => res.json())
        //     .then((data) => {
        //         updateTickets(data)
        //     })
        //    } 

    return (
        <>
            <div>
                <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
            </div> 
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            {/* //ternary statement, if ticket is emergency then className is emergency, else className is ticket */}
                            <p className={ticket.emergency ? "emergency ticket" : "ticket"}>  
                            {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                             <button onClick={() => {deleteTicket(ticket.id)}}>Delete</button>
                            </p>
                            {/* <p>{ticket.description} submitted by {ticket.customer.name}
                            and worked on by {ticket.employee.name}</p> */}
                            </div>
                    }
                )
                
                    }
                
            
        </>
    )
}
{/* <button onClick={() => history.push("/employee/create")}>Hire Employee</button> */}

{/* <button onClick={() => history.push("/ticketList")}>Delete</button> */}

