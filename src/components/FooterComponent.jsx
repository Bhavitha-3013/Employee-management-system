import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <footer
                style={{
                    backgroundColor: "#1f2937",
                    color: "white",
                    textAlign: "center",
                    padding: "15px",
                    marginTop: "0px"
                }}
            >
                © {new Date().getFullYear()} Employee Management System | All Rights Reserved
            </footer>
        );
    }
}

export default FooterComponent;