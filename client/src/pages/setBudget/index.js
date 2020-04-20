import React, { useState } from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { InputGroup, InputGroupAddon, InputGroupText, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';
import axios from 'axios';


// Dustin Was Here
function SetBudget (props) {
    let history = useHistory();
    const [groceryState, setGrocery] = useState({
      groceriesBudget: 0,
      transportationBudget: 0,
      diningBudget: 0,
      shoppingBudget: 0
    })
    Cookies.set('url', '/setBudget', { path: '' })
    let login = (site) => {
      fakeAuth.authenticate(() => {
        history.replace(site);
        
      });
    };

   function handleChange (event) {
      setGrocery({ ...groceryState,  ...{ [event.target.name]: Number(event.target.value) } })
    }

   function handleSubmit (event) {
      event.preventDefault()
        var data = {
          groceriesBudget: groceryState.groceriesBudget,
          transportationBudget: groceryState.transportationBudget,
          diningBudget: groceryState.diningBudget,
          shoppingBudget: groceryState.shoppingBudget
        }
        console.log(data)
        API.budget({
          groceriesBudget: groceryState.groceriesBudget,
          transportationBudget: groceryState.transportationBudget,
          diningBudget: groceryState.diningBudget,
          shoppingBudget: groceryState.shoppingBudget
        })
  } 

    return (
      <Form>
      <div>
          <h1 className="text-center">Please enter your budgets<span className="name"></span></h1>   
      </div>
      <Row form className="justify-content-md-center">
      <Col md={6}>
      <Label for="exampleNumber">Groceries</Label>
    <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input name="groceriesBudget" placeholder="Enter your grocery budget" min={0} max={1000} type="number" step="1" onChange={handleChange} />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
    {/* <Button color="secondary" size="sm" onClick={handleSubmit} method="user" className="right">Submit</Button> */}
      </Col>
    </Row>
    <Row form className="justify-content-md-center">
      <Col md={6}>
      <Label for="exampleNumber">Transportation</Label>
    <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input name="transportationBudget" placeholder="Enter your Transportation budget" min={0} max={1000} type="number" step="1" onChange={handleChange} />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
    {/* <Button color="secondary" size="sm" onClick={handleSubmit} method="user" className="right">Submit</Button> */}
      </Col>
    </Row>
    <Row form className="justify-content-md-center">
      <Col md={6}>
      <Label for="exampleNumber">Dining</Label>
    <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input name="diningBudget" placeholder="Enter your dining budget" min={0} max={1000} type="number" step="1" onChange={handleChange}/>
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
    {/* <Button color="secondary" size="sm" onClick={handleSubmit} method="user" className="right">Submit</Button> */}
      </Col>
    </Row>
    <Row form className="justify-content-md-center">
      <Col md={6}>
      <Label for="exampleNumber">Shopping</Label>
    <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input name="shoppingBudget" placeholder="Enter your shopping budget" min={0} max={1000} type="number" step="1" onChange={handleChange}/>
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
    <Button color="secondary" size="sm" onClick={handleSubmit} method="user" className="right">Submit Budgets</Button>
      </Col>
    </Row>
    <LogOut />
  </Form>
    )   

    }
  
export default SetBudget