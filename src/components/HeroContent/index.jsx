import React from "react";
import {
  HeroContainer,
  SideInfo,
  TitleLabel,
  LabelContainer,
  HeroImg,
  HeroBackground
} from "./style";
import PrimaryButton from "../Button/PrimaryButton";

const HeroContent = () => {
  return (
    <HeroBackground>
      <HeroContainer>
        <SideInfo>
          <h1>Reconditioned Products Shop</h1>
          <TitleLabel>
            <LabelContainer>
              <p>50+</p>
              <span>Products</span>
            </LabelContainer>
            <LabelContainer>
              <p>100+</p>
              <span>Costumers</span>
            </LabelContainer>
          </TitleLabel>
          <PrimaryButton color='black'>See More</PrimaryButton>
        </SideInfo>
        <HeroImg></HeroImg>
      </HeroContainer>
    </HeroBackground>
  );
};

export default HeroContent;
