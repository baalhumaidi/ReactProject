import React from 'react'
import styled from 'styled-components';
import {useNavigate , Link,Route,Routes} from 'react-router-dom';
import { Container} from 'react-bootstrap';

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
  width: 35px;
  height: 35px;
}
`;

function learnmore(){
return 
} ;

function Card(props) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path="/SingleProfile"; 
    navigate(path);
  }
  return (
   <Container> 
     <AboutStyle> 
      
     <div className='app-Card'>
    <span onClick={routeChange}> 
    <img className='img-pic' src={props.obj.img} alt='' ></img>
    </span>
   
 

    <Link to={"/SingleProfile"} className="font-title"> {props.obj.title}
    
     </Link>
     <Routes> 
     <Route path={"/SingleProfile"} component={<SingleProfile/>} />
     </Routes>
    <h6 > {props.obj.position}</h6>
    <a  href={props.obj.Linkedin} >
    
<img src="linkedin2.png" alt="" class="social-icon" />
</a>
</div>
</AboutStyle>
</Container>

  )
}

export default Card
