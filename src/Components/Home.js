import React from 'react'
import { Container } from 'react-bootstrap'
import SectionTitle from './SectionTitle'


export default function Home() {
  return (
    <Container> 
    <div className='App'>
      
      <SectionTitle heading='Welcome to My Website' subheading='I hope you enjoy your visit So you can find what 
      you are looking for'/>
        
    </div>
    </Container>
  )
}
