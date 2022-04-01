import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    // font-family: 'RobotoMono Regular';
    font-size: 1.1rem;
    text-align: center;
  }
  h3 {
    font-family: 'RobotoMono Bold';
    font-size: 2rem;
    margin-top: 0.5rem;
    text-align: center;
    // text-transform: uppercase;
  }
  @media only screen and (max-width: 500px) {
    text-align: center;
    p {
      font-size: 1.1rem;
    }
    // h3 {
    //   font-size: 2rem;
    // }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h3>{heading}</h3>
      <p>{subheading}</p>
      
    </SectionTitleStyle>
  );
}