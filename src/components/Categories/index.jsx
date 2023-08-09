import React from 'react'
import {
  BackgroundWrapper, CategoriesContainer, CategoriesTitle, CategoriesText, CategoriesCards, CategorieCard, CardTitle, CardText
} from './style'
import categoriesCardsData from '../../utils/categoriesCardsData';
import PrimaryButton from '../Button/PrimaryButton';

const Categories = () => {
  return (
    <CategoriesContainer>
      <CategoriesTitle>Categories</CategoriesTitle>
      <CategoriesText>Find what you are looking for</CategoriesText>
      <BackgroundWrapper>
        <CategoriesCards>
          {categoriesCardsData.map((card) =>
            <CategorieCard key={card.title}>
              <img src={card.imgSrc} alt={card.imgAlt} />
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </CategorieCard>
          )}
        </CategoriesCards>
        <PrimaryButton color={'white'}>Explore</PrimaryButton>
      </BackgroundWrapper>
    </CategoriesContainer>
  )
}

export default Categories
