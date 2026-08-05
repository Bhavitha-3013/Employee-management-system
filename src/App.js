import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import SidebarComponent from './components/SidebarComponent';

import DashboardComponent from './components/DashboardComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {

    return (

        <Router>

            <div className="app-container">

                <HeaderComponent />


                <div className="body-container">


                    <SidebarComponent />


                    <div className="content-area">

                        <Switch>

                            {/* Dashboard Page */}
                            <Route exact path="/" component={DashboardComponent} />


                            {/* Employee List Page */}
                            <Route path="/employees" component={ListEmployeeComponent} />


                            {/* Add Employee Page */}
                            <Route path="/add-employee/:id" component={CreateEmployeeComponent} />


                            {/* View Employee Page */}
                            <Route path="/view-employee/:id" component={ViewEmployeeComponent} />


                        </Switch>

                    </div>


                </div>


                <FooterComponent />


            </div>


        </Router>

    );
}

export default App;