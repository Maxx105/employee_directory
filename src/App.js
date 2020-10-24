import React from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Body from "./components/Body";
import EmployeeCard from "./components/EmployeeCard";
import './App.css';

function App() {
  return (
    <Wrapper>
      <Header>Employee Directory</Header>
      <EmployeeCard></EmployeeCard>
    </Wrapper>
  );
}

export default App;
