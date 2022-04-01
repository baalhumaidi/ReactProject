import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const FormStyle = styled.form`
  width: 75%;
  .form-group {
    width: 100%;
    margin-right:25px;
    margin-bottom: 1rem;
  }
  label {
    font-size: 1.2rem;
  }
  input,
  textarea {
     
    width: 100%;
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;

    padding: 1.2rem;
    color: var(--gray-1);
    // background-color: var(--deep-dark);
    outline:none;
    border: 1px black solid;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  button[type='submit'] {
      width: 110%;
    // background-color:#8ba3d3;
    background-color: MediumBlue;
    color: white;
    font-size: 18px ;
    display: inline-block;
    outline: none;
    border: 2px black solid;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    
      <FormStyle>
          <SectionTitle heading="Contact Us "
      subheading='Explore the future with us.
      Feel free to get in touch' />
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send Message</button>
      </FormStyle>
    
  );
}