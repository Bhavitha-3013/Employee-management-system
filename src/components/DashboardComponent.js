import React, { Component } from 'react';
import axios from 'axios';

class DashboardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeCount: 0,
            employees: []
        };
    }


    componentDidMount() {

        axios.get("http://localhost:8080/api/v1/employees")
            .then(response => {

                this.setState({
                    employeeCount: response.data.length,
                    employees: response.data.slice(0,5)
                });

            })
            .catch(error => {
                console.log(error);
            });

    }



    render() {

        return (

            <div>

                <h2 className="mb-4">
                    Dashboard
                </h2>


                <div className="row">


                    <div className="col-md-4">

                        <div className="card shadow p-3 mb-4">

                            <h5>
                                👨 Total Employees
                            </h5>

                            <h2>
                                {this.state.employeeCount}
                            </h2>

                        </div>

                    </div>



                    <div className="col-md-4">

                        <div className="card shadow p-3 mb-4">

                            <h5>
                                🏢 Departments
                            </h5>

                            <h2>
                                5
                            </h2>

                        </div>

                    </div>



                    <div className="col-md-4">

                        <div className="card shadow p-3 mb-4">

                            <h5>
                                📅 New Employees
                            </h5>

                            <h2>
                                {this.state.employees.length}
                            </h2>

                        </div>

                    </div>


                </div>



                <div className="card shadow mt-3">

                    <div className="card-header bg-primary text-white">

                        Recent Employees

                    </div>


                    <div className="card-body">


                        <table className="table">

                            <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>

                                </tr>

                            </thead>


                            <tbody>


                                {
                                    this.state.employees.map(
                                        employee =>

                                        <tr key={employee.id}>

                                            <td>
                                                {employee.firstName} {employee.lastName}
                                            </td>

                                            <td>
                                                {employee.emailId}
                                            </td>

                                        </tr>

                                    )
                                }


                            </tbody>


                        </table>


                    </div>


                </div>


            </div>

        );

    }

}


export default DashboardComponent;