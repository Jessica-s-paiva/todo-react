import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Tasks from '../Pages/Tasks/Tasks';

// import Main from "../Main/Main";
//chamar isso aqui la na main 
const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" /> 
            <Route component = { Tasks }  path="/tasks" />
        </BrowserRouter>
    )
}

export default Routes