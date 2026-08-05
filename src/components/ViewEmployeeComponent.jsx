import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
        this.backToList = this.backToList.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({ employee: res.data });
        })
    }

    backToList() {
        this.props.history.push('/employees');
    }

    render() {
        const {
    firstName,
    lastName,
    emailId,
    phoneNumber,
    department,
    jobRole,
    salary,
    joiningDate,
    status
} = this.state.employee;

        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="card col-md-6 offset-md-3 shadow-sm border-0 p-0">
                        <div className="card-header bg-dark text-white text-center py-3">
                            <h3 className="m-0">View Employee Details</h3>
                        </div>
                        <div className="card-body p-4">
                            
                            <div className="text-center mb-4">
                                <img 
                                    src={`https://ui-avatars.com/api/?name=${firstName || 'User'}+${lastName || ''}&background=0D8ABC&color=fff&size=80&rounded=true`} 
                                    alt="Avatar" 
                                    className="mb-2 shadow-sm rounded-circle"
                                />
                                <h4 className="font-weight-bold">{firstName} {lastName}</h4>
                                <p className="text-muted">{emailId}</p>
                            </div>

                            <hr />

<div className="row mb-2">
    <div className="col-md-5 font-weight-bold text-muted">First Name:</div>
    <div className="col-md-7">{firstName}</div>
</div>

<div className="row mb-2">
    <div className="col-md-5 font-weight-bold text-muted">Last Name:</div>
    <div className="col-md-7">{lastName}</div>
</div>

<div className="row mb-2">
    <div className="col-md-5 font-weight-bold text-muted">Email:</div>
    <div className="col-md-7">{emailId}</div>
</div>

<div className="row mb-2">
    <div className="col-md-5 font-weight-bold text-muted">Phone Number:</div>
    <div className="col-md-7">{phoneNumber}</div>
</div>

<div className="row mb-2">
    <div className="col-md-5 font-weight-bold text-muted">Department:</div>
    <div className="col-md-7">{department}</div>
</div>

<div className="row mb-2">
    <div className="col-md-5 font-weight-bold text-muted">Job Role:</div>
    <div className="col-md-7">{jobRole}</div>
</div>

<div className="row mb-2">
    <div className="col-md-5 font-weight-bold text-muted">Salary:</div>
    <div className="col-md-7">₹ {salary}</div>
</div>

<div className="row mb-2">
    <div className="col-md-5 font-weight-bold text-muted">Joining Date:</div>
    <div className="col-md-7">{joiningDate}</div>
</div>

<div className="row mb-4">
    <div className="col-md-5 font-weight-bold text-muted">Status:</div>
    <div className="col-md-7">
        <span className={`badge ${status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
            {status}
        </span>
    </div>
</div>

                            <div className="text-center mt-4">
                                <button className="btn btn-secondary px-4" onClick={this.backToList}>
                                    Back to Employee List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent