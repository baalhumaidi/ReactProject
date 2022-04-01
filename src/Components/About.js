import React from 'react'
import styled from 'styled-components';
import Card from './Card.js'
import SectionTitle from './SectionTitle';
import Nisha from './Nisha.jpg'
import natesan from './natesan.jpg'
import jiale from './jiale.jpg'
import { Container } from 'react-bootstrap';


const AboutStyle = styled.div`
display: flex;
justify-items: center;
justify-content: center;

.TheCards{
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  } 
img-pic {
  margin-top: 1rem;
  width: 150px;
  height: 150px;
  border: 1px black solid; 
  border-radius: 112px;

}
`;


export default function About() {

  const Cards = [{title:'Nisha Ramesh',img:Nisha, Linkedin:'https://www.linkedin.com/in/nisharamesh/' ,position:'CEO & Founder',
  info:" Nisha is an energy veteran, having spent over 10+ years in the industry across hydrogen, wind, biofuels, hydroelectric power, as well as digital solutions (Web 2.0 and Web 3.0). She has developed energy project pipelines worth over $800 million dollars and worked in well-known organizations such as Vestas, Opower (now Oracle), the United Nations as well as early-stage startups in Silicon Valley. A startup adviser and mentor across Silicon Valley, Austin and Singapore, she has advised & fundraised for early stage startups across Blockchain, Energy/CleanTech, AgTech and FinTech. She has a Bachelor's degree in Finance from the Australian National University and a Master's in Trade Policy from the Middlebury Institute of International Studies. More recently, she was at Stanford University, studying venture capital fundraising for a Web 3.0 economy."},
  {title:'Natesan R',img:natesan,position:'Chief Sales Officer',Linkedin:'https://www.linkedin.com/in/natesan-ramesh-115540/',info:"Natesan is a seasoned management consultant, company founder and Professor of Strategy & Innovation. He has worked across a number of industries, including Hydrogen, Aviation and Software solutions - working for Fortune 500 companies such as Accenture, McKinsey & Co, UniSys. He also co-founded the first point-to-point cargo carrier in India, called QuikJet. Nat has taught strategy and frugal innovation at the National University of Singapore as well as various IIT universities across India. He is both a Harvard and Stanford alum (MBAs) and has a Bachelor's in Chemical Engineering from the University of Illinois Urbana-Champaign."},{title:'Jia Le Chang',img:jiale,Linkedin:'https://www.linkedin.com/in/junior-chang-551479a5/',position:'Chief Technology Lead',info:"Jia Le is a Full Stack Developer specializing in HTML, CSS, Nodejs, Expressjs, Vuejs, React/ReactNative, JavaScript, MongoDB, mySQL languages. He is also  Blockchain Developer specializing in smart contracts, token development, metaverse world building and gaming. Prior to becoming a full-time developer, Jia Le worked in eSports & Sports Management for five years - leading Singapore's Team Kraken to the finals of the South-East Asian (SEA) Games."}].map((elm,i)=>{
    return <p> <Card obj = {elm} key = {i}/></p>
  })
 
 
  return (
    <Container> 
    <AboutStyle>
    <div className="App1">
 
      <SectionTitle heading='The Team' subheading='Meet the people behind our magical product' />
    <div className= "TheCards">
    
       {Cards}
      
     </div> 
     </div>
     </AboutStyle>
     </Container>
  )
}
