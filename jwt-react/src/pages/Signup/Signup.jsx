import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './signup.css';

function Signup() {
  const [formdata, setformdata] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setformdata({
      ...formdata,
      [name]: value
    })
  }

  const handlesubmit = async(e)=>{
    e.preventDefault();
    console.log("Name: ",formdata.name);
    console.log("Email: ",formdata.email);
    console.log("Password: ",formdata.password);
  }
  return (
    <>
      <div className='boxx'>
      <div className='compartment'>
      <p className='mt-4'>Enter Name</p>
      <FloatingLabel
        controlId="floatingInput"
        label="name"
        className="mb-3"
      >
        <Form.Control type="text" name='name' placeholder="Radha" value={formdata.name} onChange={handleInputChange} className='ip'/>
      </FloatingLabel>

      </div>

      <div className='compartment'>
      <p className='mt-4'>Enter Email</p>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" name='email' placeholder="name@example.com" value={formdata.email} onChange={handleInputChange} className='ip'/>
      </FloatingLabel>

      </div>
       
      <div className='compartment'>
      <p className='mt-4'>Enter Password</p>
      <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
        <Form.Control type="password" name='password' placeholder="Password" value={formdata.password} onChange={handleInputChange} className='ip'/>
      </FloatingLabel>
      
      <div className='smt-btn'>
      </div>
      <Button as="input" type="submit"  value="Submit" onClick={handlesubmit} className='smt-btm'/>
      </div>

      </div>
      
    </>
  );
}

export default Signup;