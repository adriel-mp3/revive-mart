import React from "react";
import {
  HeroContainer,
  SideInfo,
  Title,
  TitleLabel,
  Label,
  LabelInfo,
  LabelContainer,
  HeroImg,
} from "./HeroContentStyles";
import SeeMore from "../Buttons/SeeMore/SeeMore/SeeMore";

const HeroContent = () => {
  return (
    <HeroContainer>
      <SideInfo>
        <Title>Reconditioned Products Shop</Title>
        <TitleLabel>
          <LabelContainer>
            <Label>50+</Label>
            <LabelInfo>Products</LabelInfo>
          </LabelContainer>
          <LabelContainer>
            <Label>100+</Label>
            <LabelInfo>Costumers</LabelInfo>
          </LabelContainer>
        </TitleLabel>
        <SeeMore />
      </SideInfo>
      <HeroImg></HeroImg>
    </HeroContainer>
  );
};

export default HeroContent;
