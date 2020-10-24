import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

let employeeArray = []
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
          <div>
            <ul>
                {this.state.employees.map(employee => (
                    <li className="list-group-item" key={employee.name.first}>
                        <div className="row">
                            <div className="col-md-2" id="image">
                                <img 
                                    src={employee.picture.thumbnail} 
                                    alt={`${employee.name.first} ${employee.name.last}`} 
                                    title={`${employee.name.first} ${employee.name.last}`} 
                                    class="img-thumbnail">
                                </img>
                            </div>
                            <div className="col-md-3" id="name">
                                <h3>{employee.name.first} {employee.name.last}</h3>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        );
      }
}
  
export default EmployeeCard;