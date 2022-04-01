import React from 'react'
import styled from 'styled-components'
import ContactSection from './ContactSection'
import {Container} from 'react-bootstrap'

const thestyle = styled.div`
padding 5rem 0;
background-color : var(--deep-dark);
border-radius: 10px;
`;

export default function Contact() {
  return (
<Container> 
    <thestyle>
     
      <ContactSection />
    </thestyle>
    </Container>
  )
}
