import React from "react";
import { Route } from "react-router-dom";
import  Home from "./componentes/Home";
import Users from "./componentes/Users";
import User from "./componentes/User";


export const ApplicationRoutes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/users/" component={Users} />
    <Route path={"/users/:name"} component={User}/> 
  </>
);
