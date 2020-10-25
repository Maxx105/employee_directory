import React from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Body from "./components/Body";
import FilterForm from "./components/FilterForm";
import SortForm from "./components/SortForm";
import EmployeeCard from "./components/EmployeeCard";
import './App.css';

function App() {
  return (
    <Wrapper>
      <Header>Employee Directory</Header>
      <div className="container-fluid">
        <FilterForm></FilterForm>
        <SortForm></SortForm>
        <EmployeeCard></EmployeeCard>
      </div>
    </Wrapper>
  );
}

export default App;
