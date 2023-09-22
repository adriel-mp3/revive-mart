import React from 'react';
import logo from '../../assets/logo.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import * as S from './style'

const Footer = () => {
  
  return (
    <S.Background>
      <footer>
        <S.Wrapper>
          <S.Social>
            <S.Logo src={logo} alt="Logo svg" />
            <p>We help you find your dream item</p>
            <ul>
              <li><img src={facebook} alt="Facebook logo" /></li>
              <li><img src={instagram} alt="Instagram logo" /></li>
              <li><img src={twitter} alt="Twitter logo" /></li>
            </ul>
          </S.Social>
          <S.NavList>
            <ul>
              <li><p>Information</p></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <ul>
              <li><p>Company</p></li>
              <li><a href="#">Commuity</a></li>
              <li><a href="#">Carrer</a></li>
              <li><a href="#">Our Story</a></li>
            </ul>
            <ul>
              <li><p>Contact</p></li>
              <li><a href="#">Getting Started</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </S.NavList>
        </S.Wrapper>
        <p>2023 all Right Reserved Term of use Revive Mart</p>
      </footer>
    </S.Background>
  )
}

export default Footer