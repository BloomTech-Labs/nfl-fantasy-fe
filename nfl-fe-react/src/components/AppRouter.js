import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsPage from '../results-page/results-page.js';
import DropDownA from './DropDownA.js';
import DropDownB from './DropDownB.js'; 

export default function AppRouter() {
    return (
        <Router>
            <Route path="/results" component={ResultsPage} />
            <Route exact path="/" component={DropDownA} /> 
            <Route exact path="/" component={DropDownB} />
        </Router>
    )
}