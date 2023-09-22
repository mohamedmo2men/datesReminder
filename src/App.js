import { Container} from "react-bootstrap";
import React, { useState } from "react";

import {persons} from "./Data"
import DateCounter from "./components/DateCounter";
import Dates from "./components/Dates";
import DatesAction from "./components/DatesAction";

function App() {
const[personData , setPersonsData]=useState(persons)
const onDelete=()=>{
  setPersonsData([])
}
const onRun=()=>{
  setPersonsData(persons)
}
  return (
    <div className="font color-body">
      <Container className="py-4">
       <DateCounter persons={personData}/>
       <Dates persons={personData}/>
      <DatesAction deletedates={onDelete} rundates={onRun}/>
      </Container>
    </div>
  );
}

export default App;
