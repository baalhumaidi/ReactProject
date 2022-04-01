import React from 'react'
import styled from 'styled-components'

import {Container} from 'react-bootstrap'


const PartnerStyle = styled.div` 
display: absolute;
margin: 15px;
border-radius: 20px;
text-align: center;
  padding: 8px 0;
  margin:5px;
  color : black;
  p{ 
  // justify-items: left;
  // justify-content: left;
  // text-align: left;
  margin:5px;
 
}
forImage{
  justify-content:center;
  align-items: center;
}
    
  // border: 1px red solid;

  img{
   border: 1px black;
    width:100% important!;
     height:100% important!;
     width:350px;
      height:200px;
     margin:5px;
    radius-round: 10px;
    text-align: center;
   
     padding: 2px;
  }
  h3{
    text-align:center;
  }
  
`; 
function Partner2() {
  return (
    <div> 
   <Container>
     <PartnerStyle> 
<h3 >Main Partner </h3> 
<div className='forImage'> 
   <a href='https://evenergy.network/'>
   <img src='Evenergy.JPG'   /> 
   </a>
   </div>
<p> 
   Evenergy’s mission is to energise growth of Renewable Energy (RE) 
in Asia by partnering with players of all sizes across the RE value chain. 
Evenergy provides a credible and widely accessible source of RECs 
(via our blockchain enabled trading platform) that can be purchased for corporate sustainability objectives.  
</p>
</PartnerStyle>
 </Container>
 


<Container>
<PartnerStyle>
  <h3> Other Partners</h3>
  <p> 
    Text will be here 
  </p>
  </PartnerStyle>
</Container>
</div>
  )
}

export default Partner2
