import React from 'react'
import * as S from './style';

const Spinner = () => {
  return (
    <S.DefaultSpinnerContainer>
    {[...Array(12)].map((_, index) => (
      <div key={index} />
    ))}
  </S.DefaultSpinnerContainer>
  );
};

export default Spinner;
