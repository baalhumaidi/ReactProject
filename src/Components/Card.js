import React from 'react'
import styled from 'styled-components';

import { Container, Row,Col } from 'react-bootstrap';
import SingleProfile from './SingleProfile';

const AboutStyle = styled.div`

.img-pic {
  margin-top: 1rem;
  width: 150px;
  height: 150px;
  border: 1px black solid; 
  border-radius: 112px;
}
.social-icon{
  width: 30px;
  height: 30px;

  
}
`;

function learnmore(){
return 
} ;

function Card(props) {
  return (
   <Container> 
     <AboutStyle> 
      
     <div className='app-Card'>
    <span onClick={learnmore}> 
    <img className='img-pic' src={props.obj.img} alt='' ></img>
    </span>
    <Row>
    <Col sm={9}>
    
    <span onClick={learnmore()} className="font-title"> {props.obj.title} </span></Col> 
   <Col sm={2} ><a  href={props.obj.Linkedin} >
    {/* <FaLinkedin /> */}
<img src="linkedin2.png" alt="" class="social-icon" />
</a> </Col>
 
 </Row>
    <h6 > {props.obj.position}</h6>
 
</div>
</AboutStyle>
</Container>

  )
}

export default Card
