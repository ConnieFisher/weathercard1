import React from 'react';
import styled from '@emotion/styled';

const Condition = props => {
  const Temp = styled.h1`
    font-family: 'Fira Sans', sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;
  const Condition = styled.h3`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <>
      <Temp>20 °C</Temp>
      <Condition>Clear</Condition>
    </>
  );
};

export default Condition;
