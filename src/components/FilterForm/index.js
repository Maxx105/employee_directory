import React, {Component} from "react";
import "./style.css";

class FilterForm extends Component {
    render() {
        return (
        <div className="form-group">
            <label htmlFor="sel1">Filter By:</label>
            <select className="form-control" id="sel1" placeholder="Sort By" onChange={this.props.onChange}>
                <option value="none"> Select an Option </option> 
                <option value="State">State</option>
                <option value="Name">Name</option>
            </select>
            <div style={{marginTop: '5px'}}>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder={this.props.placeholder} 
                    id={this.props.id} 
                    style={{visibility: this.props.visibility}}
                ></input>
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{visibility: this.props.visibility}} 
                    onClick={this.props.onClick}
                >Submit</button>
            </div>
        </div>
        )
    };
}

export default FilterForm;