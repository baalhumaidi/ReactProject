import React from 'react'
import {Container} from 'react-bootstrap'
import styled from 'styled-components';

const AboutStyle = styled.div`
display: flex;
justify-items: center;
  justify-content: center;
  .img-pic {
  margin-top: 1rem;
  width: 150px;
  height: 150px;
   border: 1px black solid; 

  border-radius: 112px;

}
.social-icon{
  width: 35px;
  height: 35px;

  
}

`;

function SingleProfile() {
  return (
  
    <Container> 
<AboutStyle> 
  
  <h2> Hello world</h2>
         {/* <div className='app-Card'>
    <img className='img-pic' src={props.obj.img} alt=''></img>

    <h5 > {props.obj.title} </h5> 
 
    <h6> {props.obj.position}</h6>
  <h6>{props.obj.info}</h6>
  <a  href={props.obj.Linkedin} >
    
    <img src="linkedin2.png" alt="" class="social-icon" />
    </a>
    </div> */}
    </AboutStyle>
    </Container> 

  )
}

export default SingleProfile


