import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [formState, setFormState] = useState({name: '', email: '', message: ''})
  const [userMessage, setUserMessage] = useState('')
  const handleChange = e => {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

const handleValidation = e => {
 if (e.target.name === "email") {
  if(!validateEmail(e.target.value)) {
    setUserMessage("Invalid email")
  } else {
    setUserMessage("")
  }
 } else {
  if(!e.target.value.length) {
    setUserMessage("This is a required field")
  } else {
    setUserMessage("")
  }
 }
}


  return (
    <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Your name" name="name" onChange = {handleChange} onBlur={handleValidation} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"  name="email" onChange = {handleChange} onBlur={handleValidation}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3}  name="message" onChange = {handleChange} onBlur={handleValidation}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}