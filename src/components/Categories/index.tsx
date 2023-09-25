import React from "react";
import * as S from "./style";
import categoriesData from "@/utils/categoriesData";
import PrimaryButton from "@/components/Button/PrimaryButton";
import arrow from "@/assets/arrow-black.svg";

const Categories = () => {
  
  return (
    <S.Container>
      <h2>Categories</h2>
      <p>Find what you are looking for</p>
      <S.Background>
        <S.Cards>
          {categoriesData.map((data) =>
            <S.Card key={data.title}>
              <img src={data.imgSrc} alt={data.imgAlt} />
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </S.Card>
          )}
        </S.Cards>
        <PrimaryButton color={'white'}>Explore</PrimaryButton>
      </S.Background>
    </S.Container>
  )
}

export default Categories

