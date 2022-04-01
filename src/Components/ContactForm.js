import React, {useState} from 'react'
import styled from 'styled-components';
import {Form,Button} from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import emailjs from '@emailjs/browser'



const FormStyle = styled.form`
width: 100%;
.form-group{
    width:100%;
    margin-bottom:2rem;

}
label{
    font-size: 2rem;
}
input,textarea{
    width:100%;
    font-size:2rem;
    padding: 1.2rem;
    color:var(--gray-1);
    background-color: var(--deep-dark);
    outline:none;
    border-radius: 10px;
    margin top: 1rem:
}
textarea{
    min-height:250px;
    resize: vertical;
}
button[type="submit]
{
    background-color: var(--gray-2);
    color: var(--black);
    font-size:2rem;
    display: inline-block;
    padding 1rem 4 rem;
    border: 1px black solid;
    border-radius: 10px;
    cursor: pointer;
}`;


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_xojx0qa', 'template_ps3bedk', e.target, 'L56L-nVxunPN8oVu_')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};

function ContactForm() {
 
  return (
    <div>
       <SectionTitle heading="Contact Us "
      subheading='Would you like to learn more about REgeneration Energy?
       Contact us below and we will get back to you shortly.' />
      <Form onSubmit={sendEmail}>
      <Form.Group className="mb-3"  >
    <Form.Label>Name: </Form.Label>
    <Form.Control type="text" placeholder="Full Name" name="name" />
  </Form.Group>

  <Form.Group className="mb-3"  >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="How can we get better?" name="message" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Send Message
  </Button>
</Form>
    </div>
  )
}

export default ContactForm
