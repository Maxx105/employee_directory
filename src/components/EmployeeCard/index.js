import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class EmployeeCard extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        this.loadEmployee();
    }

    loadEmployee = () => {
        API.getRandomEmployee()
          .then(res =>
            this.setState({
              employees: res.data.results
            })
          )
          .catch(err => console.log(err));
      };

    render() {
        return (
        <div className="container-fluid">
            <div>
                <ul>
                    <li className="list-group-item shadow p-3 mb-5 bg-white rounded">
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
                </ul>
          
                <ul>
                    {this.state.employees.map((employee, i) => (
                        <li className="list-group-item shadow p-3 mb-5 bg-white rounded" key={i}>
                            <div className="row">
                                <div className="col-md-2 col-sm-12" id="image">
                                    <img 
                                        src={employee.picture.large} 
                                        alt={`${employee.name.first} ${employee.name.last}`} 
                                        title={`${employee.name.first} ${employee.name.last}`} 
                                        className="img-thumbnail">
                                    </img>
                                </div>
                                <div className="col-md-2 col-sm-12" id="name">
                                    <h3 className="nameFont">{employee.name.first} {employee.name.last}</h3>
                                </div>
                                <div className="col-md-5 col-sm-12" id="contact">
                                    <h2 className = "emailFont email"><strong>email:</strong> {employee.email}</h2>
                                    <h2 className = "phoneFont phone"><strong>phone:</strong> <span>{employee.phone}</span></h2>
                                </div>
                                <div className="col-md-3 col-sm-12" id="location">
                                    <h2 className = "locationFont">{employee.location.city}, {employee.location.state}, {employee.location.country}</h2>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        );
      }
}
  
export default EmployeeCard;