import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

import SectionTitle from './SectionTitle';
import LeftSection from './LeftSection';



const ContactSectionStyle = styled.div`
  padding: 1rem 0;
  
  .contactSection__wrapper{
      display:flex;
    //   gap:5rem;
      margin-top: 0.5rem;
      justify-content: space-around;
      position: relative;
  }
  .contactionSection__wrapper::after{
    position: absolute;
    content: '';
    width: 10% ;
    height: 50%;
    background-color: aqua;
    color: maroon;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
  }
  .right {
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
//   @media only screen and (max-width: 500px) {
//     .contactSection__wrapper {
//       flex-direction: column;
//     }
    .contactSection__wrapper::after {
      display: flex;
      color: var(--black);
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }

  `;


  const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  svg {
    width: 3.5rem;
  }
`;
function ContactSection() {

  return (
      <ContactSectionStyle> 
    
      <div className='contactSection__wrapper'>
      <div className='left'>

 <LeftSection />

      </div>
      
      <div className="right"> 
      <ContactForm />
      </div>
      </div>

    
    </ContactSectionStyle>
  )
}

export default ContactSection
