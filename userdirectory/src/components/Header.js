import React from "react";
import {header} from "./styles"


function Header() {
    const styleObj = {
        fontSize: 30,
    };
    const header = {
        backgroundColor: "#CC5500"
    };

    return (
        <div className="jumbotron jumbotron-fluid text-white border-bottom border-5 border-dark" style={header}>
        <div className="container">
        <h1 className="display-4 text-center">  Employee Directory  </h1> 
        <p className="text-center mt-1">Need to look for an Employee? We can help!</p>
                <div className="text-center mt-4">
                <span><i className="fas fa-users text-center" style={styleObj}> </i> <i className="fas fa-phone-alt ml-5" style={styleObj}></i>
                <i className="fas fa-mail-bulk ml-5" style={styleObj}></i></span> </div>
        </div>
      </div>
    )
};

export default Header;
