import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            searchTerm: ''
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    deleteEmployee(id) {
        if (window.confirm("Are you sure you want to delete this employee record?")) {
            EmployeeService.deleteEmployee(id).then(res => {
                this.setState({
                    employees: this.state.employees.filter(employee => employee.id !== id)
                });
            });
        }
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    handleSearch(e) {
        this.setState({ searchTerm: e.target.value });
    }

    render() {
        const filteredEmployees = this.state.employees.filter(employee => {
            const firstName = employee.firstName ? employee.firstName.toLowerCase() : '';
            const lastName = employee.lastName ? employee.lastName.toLowerCase() : '';
            const emailId = employee.emailId ? employee.emailId.toLowerCase() : '';
const department = employee.department ? employee.department.toLowerCase() : '';
const jobRole = employee.jobRole ? employee.jobRole.toLowerCase() : '';
            const term = this.state.searchTerm.toLowerCase();

           return (
    firstName.includes(term) ||
    lastName.includes(term) ||
    emailId.includes(term) ||
    department.includes(term) ||
    jobRole.includes(term)
);
        });

        return (
            <div className="container mt-4 mb-5">
                <h2 className="text-center font-weight-bold my-4">Employees List</h2>
                
                {/* Search Bar & Add Button Row */}
                <div className="row mb-3 align-items-center">
                    <div className="col-md-6 mb-2 mb-md-0">
                        <button className="btn btn-primary shadow-sm" onClick={this.addEmployee}>
                            + Add Employee
                        </button>
                    </div>
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            className="form-control shadow-sm" 
                            placeholder="🔍 Search by name or email..." 
                            value={this.state.searchTerm}
                            onChange={this.handleSearch}
                        />
                    </div>
                </div>

                {/* Main Employee Table */}
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-0">
                                <table className="table table-striped table-bordered mb-0">
<thead className="thead-dark">
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Department</th>
        <th>Job Role</th>
        <th>Salary</th>
        <th>Joining Date</th>
        <th>Status</th>
        <th className="text-center">Actions</th>
    </tr>
</thead>
                                    <tbody>
{
    filteredEmployees.length > 0 ? (

        filteredEmployees.map(employee =>

            <tr key={employee.id}>

                <td>{employee.firstName}</td>

                <td>{employee.lastName}</td>

                <td>{employee.emailId}</td>

                <td>{employee.phoneNumber}</td>

                <td>{employee.department}</td>

                <td>{employee.jobRole}</td>

                <td>
                    ₹ {employee.salary}
                </td>

                <td>{employee.joiningDate}</td>

                <td>

                    {
                        employee.status === "Active" ?

                            <span className="badge badge-success p-2">
                                Active
                            </span>

                            :

                            <span className="badge badge-danger p-2">
                                Inactive
                            </span>

                    }

                </td>

                <td className="text-center">

                    <button
                        onClick={() => this.editEmployee(employee.id)}
                        className="btn btn-info btn-sm text-white"
                    >
                        Update
                    </button>

                    <button
                        style={{ marginLeft: "8px" }}
                        onClick={() => this.deleteEmployee(employee.id)}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>

                    <button
                        style={{ marginLeft: "8px" }}
                        onClick={() => this.viewEmployee(employee.id)}
                        className="btn btn-secondary btn-sm"
                    >
                        View
                    </button>

                </td>

            </tr>

        )

    ) : (

        <tr>

            <td colSpan="10" className="text-center py-4">

                No Employee Records Found

            </td>

        </tr>

    )
}
</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent