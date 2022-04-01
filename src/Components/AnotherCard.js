import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

const AboutStyle = styled.div`

.img-pic {
  margin-top: 1rem;
  width: 150px;
  height: 150px;
  border: 1px black solid; 
  border-radius: 112px;
}
.social-icon{
  // border-radius: 112px;
  width: 20px;
  height: 20px;
  margin-bottom:
}
`;
export default function AnotherCard(props) {
  return (
    <div  >
      

      
  
  <Card style={{ width: '18rem' }} className="app-Card">
  {/* <Card className='Card'> */}
  {/* <Card.Img variant="rounded" src="holder.js/100px100" /> */}
  
  <Card.Img variant="rounded"  src={props.obj.img} />
  <Card.Body>
    <Card.Title >{props.obj.title} <a  href={props.obj.Linkedin}>
    
<SocialIcon className="icon" url="https://linkedin.com/in/jaketrent" />
</a></Card.Title>

 
    <Card.Text>
    {props.obj.position}
    </Card.Text>
  
  </Card.Body>
</Card>
</div>

  )
}
