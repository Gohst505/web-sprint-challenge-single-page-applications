import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as yup from 'yup';
import Pizza from './Pizza';
import schema from './Validation';
import axios from 'axios';

const initialFormValue={
  username: '',
  toppingsOne: false,
  toppingsTwo: false,
  toppingsThree:false,
  toppingsFour:false,
  specialText:''
}

const initialFormErrors={
  username: '',
  toppingsOne: '',
  toppingsTwo: '',
  toppingsThree:'',
  toppingsFour:'',
  specialText:''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`https://reqres.in/api/orders`, formValues)
    .then(res =>{
      
      setUsers([res.data, ...users]);
    })
    .catch(err =>console.error(err))
    .finally(()=> setFormValues(initialFormValue)) 
  }
  
  const validate = (name,value,specialText)=>{
    yup.reach(schema, name,specialText)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: '', [specialText]:''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  
  const handleChange = (name, value)=>{
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      
      
      <Link to='/pizza'>
        <button id="order-pizza">order</button>
      </Link>

      <Link to ='/'>
        <button id="pizza-form">Home</button>
      </Link>

      <input id="#name-input"/>
      <input id="special-text"/>
      <Pizza 
      values={formValues} 
      change={handleChange} 
      errors={formErrors} 
      submit={handleSubmit}/>

      <select id="size-dropdown">
        <option value='1'>Small</option>
        <option value='2'>Medium</option>
        <option value='3'>Large</option>
      </select>

      
      {users.map(user =>{
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.name}</p>
          <p>{user.size}</p>
          <p>{user.toppingsOne}</p>
          <p>{user.toppingsTwo}</p>
          <p>{user.specialText}</p>
        </div>
      })}

<button id ="order-button" type = "submit" value="Create Pizza">Submit</button>
    </div>
  );
};
export default App;
