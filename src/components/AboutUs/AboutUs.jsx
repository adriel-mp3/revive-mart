import React from 'react'
import { AboutContainer, AboutTitle, AboutText, AboutCards, AboutCard, CardImage, CardText, CardTitle, ImageWrapper } from './AboutUsStyles'
import aboutCardsData from '../../utils/aboutCardsData';

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutTitle>About us</AboutTitle>
      <AboutText>Embrace nature&apos;s allure with pre-loved finds. Order now!</AboutText>
      <AboutCards>
        {aboutCardsData.map((card) =>
          <AboutCard key={card.title}>
            <ImageWrapper>
              <CardImage src={card.imgSrc} alt={card.imgAlt} />
            </ImageWrapper>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
          </AboutCard>
        )}
      </AboutCards>
    </AboutContainer>
  )
}

export default AboutUs