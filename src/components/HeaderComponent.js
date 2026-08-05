import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark shadow"
                    style={{
                        backgroundColor: "#0d6efd",
                        padding: "12px 30px"
                    }}
                >
                    <span
                        className="navbar-brand"
                        style={{
                            fontSize: "26px",
                            fontWeight: "bold",
                            color: "white"
                        }}
                    >
                        Employee Management System
                    </span>

                    <div className="ml-auto">
                        <span
                            style={{
                                color: "white",
                                fontSize: "17px"
                            }}
                        >
                            Welcome Admin 👋
                        </span>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;