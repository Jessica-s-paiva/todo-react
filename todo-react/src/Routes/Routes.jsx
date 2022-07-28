import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Tasks from '../Pages/Tasks/Tasks';

// import Main from "../Main/Main";
//chamar isso aqui la na main 
const Routes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route component = { Home }  path="/" /> 
            <Route component = { Tasks }  path="/tasks" />
        </Routes>
            
        </BrowserRouter>
    )
}

export default Routes