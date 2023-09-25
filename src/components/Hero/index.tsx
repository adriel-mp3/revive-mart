import React from "react";
import * as S from "./style";
import PrimaryButton from "../Button/PrimaryButton";
import arrow from "../../assets/arrow-button.svg";
const Hero = () => {
  return (
    <S.Background>
      <S.Container>
        <S.Side>
          <h1>Reconditioned Products Shop</h1>
          <S.Description>
            <S.Label>
              <p>50+</p>
              <span>Products</span>
            </S.Label>
            <S.Label>
              <p>100+</p>
              <span>Costumers</span>
            </S.Label>
          </S.Description>
          <PrimaryButton label="See More" variant="dark" icon={arrow} />
        </S.Side>
        <S.HeroImg></S.HeroImg>
      </S.Container>
    </S.Background>
  );
};

export default Hero;
