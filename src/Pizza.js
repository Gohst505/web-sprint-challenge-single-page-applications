import React from "react";


const Pizza = (props) =>{
const {change, submit, errors} = props;
const{username, toppingsOne, toppingsTwo,toppingsThree,toppingsFour, specialText} = props.values;

const onChange = (e)=>{
    const{name,value, checked, type} = e.target
    const newValue = type === 'checkbox' ? checked:value;
    change(name, newValue);
}

const onSubmit = (e) =>{
    e.preventDefault();
    submit();
}
return (
<div>
    <h1>inputs</h1>
    <p>{errors.username}</p>
    <p>{errors.toppingsOne}</p>
    <p>{errors.toppingsTwo}</p>
    <p>{errors.toppingsThree}</p>
    <p>{errors.toppingsFour}</p>
    <p>{errors.specialText}</p>
    <form onSubmit={onSubmit}>
        <label >Name:
            <input id="name-input"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            />
           </label>
           
           <label>Pineapple:
            <input
            type="checkbox"
            name="toppingsOne"
            checked={toppingsOne}
            onChange={onChange}
            />
           </label>
           <label>Pepperoni:
            <input
            type="checkbox"
            name="toppingsTwo"
            checked={toppingsTwo}
            onChange={onChange}
            />
           </label>
           <label>Olives:
            <input
            type="checkbox"
            name="toppingsThree"
            checked={toppingsThree}
            onChange={onChange}
            />
           </label>
           <label>Green Peppers:
            <input
            type="checkbox"
            name="toppingsFour"
            checked={toppingsFour}
            onChange={onChange}
            />
           </label>

           <label  >Here are the special instructions:
            <input id="special-text"
            type="text"
            name="special-text"
            value={specialText}
            onChange={onChange}
            />
           </label>
           <input type="submit" value="Create Pizza"/>          
           
        </form>
</div>
)
}
export default Pizza;