import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
    id: this.props.match.params.id,

    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    department: '',
    jobRole: '',
    salary: '',
    joiningDate: '',
    status: 'Active',

    errors: {}
}
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeJobRoleHandler = this.changeJobRoleHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeJoiningDateHandler = this.changeJoiningDateHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
    }

    componentDidMount() {
        if(this.state.id === '_add'){
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
this.setState({
    firstName: employee.firstName || '',
    lastName: employee.lastName || '',
    emailId: employee.emailId || '',
    phoneNumber: employee.phoneNumber || '',
    department: employee.department || '',
    jobRole: employee.jobRole || '',
    salary: employee.salary || '',
    joiningDate: employee.joiningDate || '',
    status: employee.status || 'Active'
});
            });
        }        
    }

    validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!this.state.firstName.trim()) {
            errors.firstName = "First name is required.";
            isValid = false;
        }
        if (!this.state.lastName.trim()) {
            errors.lastName = "Last name is required.";
            isValid = false;
        }
        if (!this.state.emailId.trim()) {
            errors.emailId = "Email address is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(this.state.emailId)) {
            errors.emailId = "Please enter a valid email format.";
            isValid = false;
        }

        this.setState({ errors });
        return isValid;
    }

    saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    console.log("Save button clicked");

    if (!this.validateForm()) {
        console.log("Validation failed");
        return;
    }

    console.log("Validation passed");

   let employee = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    emailId: this.state.emailId,
    phoneNumber: this.state.phoneNumber,
    department: this.state.department,
    jobRole: this.state.jobRole,
    salary: this.state.salary,
    joiningDate: this.state.joiningDate,
    status: this.state.status
};

    console.log("Employee Object:", employee);

    if (this.state.id === '_add') {

        EmployeeService.createEmployee(employee)
            .then(res => {
                console.log("Employee saved successfully", res.data);
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.error("Create Employee Error:", error);

                if (error.response) {
                    console.log("Status:", error.response.status);
                    console.log("Response:", error.response.data);
                }

                alert("Failed to save employee. Check the console.");
            });

    } else {

        EmployeeService.updateEmployee(employee, this.state.id)
            .then(res => {
                console.log("Employee updated successfully");
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.error("Update Employee Error:", error);

                if (error.response) {
                    console.log("Status:", error.response.status);
                    console.log("Response:", error.response.data);
                }

                alert("Failed to update employee.");
            });

    }
}
    
    changeFirstNameHandler(event) {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler(event) {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler(event) {
        this.setState({emailId: event.target.value});
    }
    changePhoneNumberHandler(event) {
    this.setState({ phoneNumber: event.target.value });
}

changeDepartmentHandler(event) {
    this.setState({ department: event.target.value });
}

changeJobRoleHandler(event) {
    this.setState({ jobRole: event.target.value });
}

changeSalaryHandler(event) {
    this.setState({ salary: event.target.value });
}

changeJoiningDateHandler(event) {
    this.setState({ joiningDate: event.target.value });
}

changeStatusHandler(event) {
    this.setState({ status: event.target.value });
}

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if(this.state.id === '_add'){
            return <h3 className="text-center m-0">Add Employee</h3>
        } else {
            return <h3 className="text-center m-0">Update Employee</h3>
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 shadow-sm border-0 p-0">
                            <div className="card-header bg-dark text-white py-3">
                                {this.getTitle()}
                            </div>
                            <div className="card-body p-4">
                                <form>
                                    <div className="form-group mb-3">
                                        <label className="font-weight-bold"> First Name: </label>
                                        <input 
                                            placeholder="First Name" 
                                            name="firstName" 
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            value={this.state.firstName} 
                                            onChange={this.changeFirstNameHandler}
                                        />
                                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="font-weight-bold"> Last Name: </label>
                                        <input 
                                            placeholder="Last Name" 
                                            name="lastName" 
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            value={this.state.lastName} 
                                            onChange={this.changeLastNameHandler}
                                        />
                                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                    </div>

                                    <div className="form-group mb-4">
                                        <label className="font-weight-bold"> Email Id: </label>
                                        <input 
                                            placeholder="Email Address" 
                                            name="emailId" 
                                            type="email"
                                            className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                            value={this.state.emailId} 
                                            onChange={this.changeEmailHandler}
                                        />
                                        {errors.emailId && <div className="invalid-feedback">{errors.emailId}</div>}
                                    </div>
                                    <div className="form-group mb-3">
    <label className="font-weight-bold">Phone Number:</label>
    <input
        type="text"
        className="form-control"
        placeholder="Enter Phone Number"
        value={this.state.phoneNumber}
        onChange={this.changePhoneNumberHandler}
    />
</div>

<div className="form-group mb-3">
    <label className="font-weight-bold">Department:</label>
    <select
        className="form-control"
        value={this.state.department}
        onChange={this.changeDepartmentHandler}
    >
        <option value="">Select Department</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
    </select>
</div>

<div className="form-group mb-3">
    <label className="font-weight-bold">Job Role:</label>
    <input
        type="text"
        className="form-control"
        placeholder="Enter Job Role"
        value={this.state.jobRole}
        onChange={this.changeJobRoleHandler}
    />
</div>

<div className="form-group mb-3">
    <label className="font-weight-bold">Salary:</label>
    <input
        type="number"
        className="form-control"
        placeholder="Enter Salary"
        value={this.state.salary}
        onChange={this.changeSalaryHandler}
    />
</div>

<div className="form-group mb-3">
    <label className="font-weight-bold">Joining Date:</label>
    <input
        type="date"
        className="form-control"
        value={this.state.joiningDate}
        onChange={this.changeJoiningDateHandler}
    />
</div>

<div className="form-group mb-4">
    <label className="font-weight-bold">Status:</label>
    <select
        className="form-control"
        value={this.state.status}
        onChange={this.changeStatusHandler}
    >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
    </select>
</div>

                                    <div className="text-right">
                                        <button className="btn btn-success px-4" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger px-4 ml-2" onClick={this.cancel} style={{marginLeft: "10px"}} type="button">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent