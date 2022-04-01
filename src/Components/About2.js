import React from 'react'
import {Container} from 'react-bootstrap';
import Card from './Card.js';
import Nisha from './Nisha.jpg'
import natesan from './natesan.jpg'
import jiale from './jiale.jpg'
import history from './history';
import SingleProfile from './SingleProfile.js';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'



const newpath={
    pathname:"/SingleProfile/",user:{
        title:'Nisha Ramesh',
        img:Nisha ,position:'CEO & Founder',info:' CEo'}
}

function About2() {

    const Cards = [{title:'Nisha Ramesh',img:Nisha ,position:'CEO & Founder',info:' CEo'},
    {title:'Natesan R',img:natesan,position:'Chief Sales Officer'},
    {title:'Jia Le Chang',img:jiale,position:'Chief Technology Lead'}].map((elm,i)=>{
      return <p> <Card obj = {elm} key = {i}/></p>
    })
  return (
    <div>
      <Container>
      <div className='app-Card'>
      
    <img src={Nisha}  alt=''></img>
    <h5  > Nisha Ramesh</h5> 
    <li >

<Link  onClick={() => history.push('/SingleProfile')}>Nisha Ramesh </Link>
{/* <Route path={"/SingleProfile"} component={<SingleProfile/>} /> */}
</li>

    <span > CEO & Founder</span>
   <h6 > Test </h6>
</div>
      </Container>
    </div>
  )
}

export default About2
