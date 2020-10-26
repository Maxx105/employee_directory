import React from "react";
import "./style.css";

function EmployeeCardTitle() {
  return (
    <li className="list-group-item shadow p-3 mb-5 bg-light rounded">
        <div className="row">
            <div className="col-md-2 col-sm-12" id="image"></div>
            <div className="col-md-2 col-sm-12" id="name">
                <h3>name:</h3>
            </div>
            <div className="col-md-5 col-sm-12" id="contact">
                <h3>contact:</h3>
            </div>
            <div className="col-md-3 col-sm-12" id="location">
                <h3>location:</h3>
            </div>
        </div>
    </li>
  )
}

export default EmployeeCardTitle;


