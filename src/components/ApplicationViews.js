import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeesList";
import { TicketList } from "./serviceTickets/TicketList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { HireForm } from "./employees/HireEmployee";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employee/create">
            <HireForm />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/ticket/create">
                <TicketForm />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>

        </>
    )
}