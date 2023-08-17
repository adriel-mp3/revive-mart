import React from 'react'
import { DefaultSpinnerContainer } from './style';

const Spinner = () => {
  return (
    <DefaultSpinnerContainer>
    {[...Array(12)].map((_, index) => (
      <div key={index} />
    ))}
  </DefaultSpinnerContainer>
  );
};

export default Spinner;
