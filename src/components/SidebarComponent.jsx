import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SidebarComponent.css';


class SidebarComponent extends Component {

    render() {

        return (

            <div className="sidebar">

                <h5 className="sidebar-title">
                    MENU
                </h5>


                <ul className="nav flex-column">


                    <li className="nav-item">

                        <Link 
                            to="/"
                            className="nav-link sidebar-link"
                        >
                            🏠 Dashboard
                        </Link>

                    </li>



                    <li className="nav-item">

                        <Link 
                            to="/employees"
                            className="nav-link sidebar-link"
                        >
                            👨 Employees
                        </Link>

                    </li>



                    <li className="nav-item">

                        <Link 
                            to="#"
                            className="nav-link sidebar-link"
                        >
                            🏢 Departments
                        </Link>

                    </li>



                    <li className="nav-item">

                        <Link 
                            to="#"
                            className="nav-link sidebar-link"
                        >
                            🚪 Logout
                        </Link>

                    </li>


                </ul>


            </div>

        );

    }

}


export default SidebarComponent;