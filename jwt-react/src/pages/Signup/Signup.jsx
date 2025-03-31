import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './signup.css';

function Signup() {
  return (
    <>

      <p className='mt-4'>Enter Email</p>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" className='ip'/>
      </FloatingLabel>

      <p className='mt-4'>Enter Password</p>
      <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
        <Form.Control type="password" placeholder="Password" className='ip'/>
      </FloatingLabel>
      
      <div className='smt-btn'>
      </div>
      <Button as="input" type="submit" value="Submit" className='smt-btm'/>

    </>
  );
}

export default Signup;