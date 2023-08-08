import React from 'react'
import { AboutContainer, AboutCards, AboutCard, CardText, CardTitle, ImageWrapper } from './AboutUsStyles'
import aboutCardsData from '../../utils/aboutCardsData';

const AboutUs = () => {
  return (
    <AboutContainer>
      <h2>About us</h2>
      <p>Embrace nature&apos;s allure with pre-loved finds. Order now!</p>
      <AboutCards>
        {aboutCardsData.map((card) =>
          <AboutCard key={card.title}>
            <ImageWrapper>
              <img src={card.imgSrc} alt={card.imgAlt} />
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