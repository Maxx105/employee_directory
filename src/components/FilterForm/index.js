import React, {Component } from "react";
import "./style.css";

class FilterForm extends Component {

    state = {
        placeholder: '',
        id: '',
        visibility: 'hidden',
        filterString: 'test'
    }

    handleFilterChange = event => {
        let filterString = event.target.value;
        let visibilityString = '';
        if (filterString === 'none') {
            visibilityString = 'hidden';
        } else {
            visibilityString = 'visible';
        }
        this.setState({
            placeholder: `Enter ${event.target.value}`,
            id: filterString,
            visibility: visibilityString,
            filterString: 'test'
        });
        
    }

    handleFilterSubmit = event => {

    }
  
    render() {
        return (
        <div className="form-group">
            <ul>
                <label htmlFor="sel1">Filter By:</label>
                <select className="form-control" id="sel1" placeholder="Sort By" onChange={event => this.handleFilterChange(event)}>
                    <option value="none"> Select an Option </option> 
                    <option value="State">State</option>
                    <option value="Name">Name</option>
                </select>
                <div style={{marginTop: '5px'}}>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder={this.state.placeholder} 
                        id={this.state.id} 
                        style={{visibility: this.state.visibility}}
                    ></input>
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{visibility: this.state.visibility}} 
                        onClick={event => this.handleFilterSubmit(event)}
                    >Submit</button>
                </div>
            </ul>
        </div>
        )
    };
}

export default FilterForm;