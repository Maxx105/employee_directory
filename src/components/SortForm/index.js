import React from "react";
import "./style.css";

function SortForm() {
    return (
        <div className="form-group">
            <label htmlFor="sel1">Sort By:</label>
            <select className="form-control" id="sel1" placeholder="Sort By">
                <option value="none"> Select an Option </option> 
                <option>Alphabetically By Last Name (A → Z)</option>
                <option>Alphabetically By Last Name (Z → A)</option>
                <option>Alphabetically By First Name (A → Z)</option>
                <option>Alphabetically By First Name (Z → A)</option>
            </select>
        </div>
    );
}

export default SortForm;