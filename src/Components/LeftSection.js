import React from 'react'
import styled from 'styled-components'
import image from './contactus.png'


const ItemStyles = styled.div`
// width: 10rem;
// height: 10rem;
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
//   gap: 2rem;
  border-radius: 8px;
  margin-left: 25px;
//   margin-top: 4rem;
  margin-bottom: 2rem;
  img{ 
      width:100%;
      height: 100%;
     
      margin-top: 7rem;
  
  align-items: center;
  border-radius: 10px
  }

`;

function LeftSection() {
  return (
    <ItemStyles>
    <img  src='car.jpg' alt='Car filled with clean energy' >
        </img>  
    </ItemStyles>
  )
}

export default LeftSection
