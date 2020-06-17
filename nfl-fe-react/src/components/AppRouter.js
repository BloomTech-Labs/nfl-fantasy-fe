
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsPage from '../results-page/results-page.js';
import ApiBE from "../actions/ApiBE.js"; 
import userGuide from "./userGuide.js"; 
import RegisterForm from "../components/user/RegisterForm.js"; 
import LoginFormik from "../components/user/LoginFormik.js"; 
import Dashboard from "../components/user/Dashboard.js"; 
import PrivateRoute from "../hooks/PrivateRoute.js"; 

export default function AppRouter() {
    return (
        <Router>
            <Route exact path="/" component={ResultsPage} />
            <Route exact path="/" component={ApiBE} />
            <Route path="/howtoguide" component={userGuide} />

            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginFormik} />
            
            {/* Change back to PrivateRoute after testing */}
            {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            <Route path="/dashboard" component={Dashboard} />
        </Router>
    )
}
