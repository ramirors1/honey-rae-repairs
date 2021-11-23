import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";

export const Repairs = () => (
  <>
    <Route
      render={() => {  //determines which compponent should be rendered
        if (localStorage.getItem("honey_customer")) {  //if there is something in localStorage continue with function, otherwise redirect to the else statement
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;  //redirect is run if the render function is not true
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
    