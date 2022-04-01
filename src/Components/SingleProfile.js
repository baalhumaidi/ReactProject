import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';

const AboutStyle = styled.div`
display: flex;
justify-items: center;
  justify-content: center;
img {
  margin-top: 1rem;
  width: 150px;
  height: 150px;
   border: 1px black solid; 

  border-radius: 112px;

}
`;

function SingleProfile(props) {
  return (
<AboutStyle> 
         <div className='app-Card'>
    <img src={props.obj.img} alt=''></img>

    <h5 > {props.obj.title} </h5> 
    <a  href={props.obj.Linkedin} className= 'icon'>
<FaLinkedin />
</a>
    <h6> {props.obj.position}</h6>
  <h6>{props.obj.info}</h6>
</div>
</AboutStyle>
  )
}

export default SingleProfile


