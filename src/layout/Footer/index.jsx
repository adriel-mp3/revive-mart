import React from 'react';
import logo from '../../assets/logo.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import { FooterBackground, FooterContent, FooterNav, FooterNetworking, Logo } from './style'

const Footer = () => {
  return (
    <FooterBackground>
      <footer>
        <FooterContent>
          <FooterNetworking>
            <Logo src={logo} alt="Logo svg" />
            <p>We help you find your dream item</p>
            <ul>
              <li><img src={facebook} alt="Facebook logo" /></li>
              <li><img src={instagram} alt="Instagram logo" /></li>
              <li><img src={twitter} alt="Twitter logo" /></li>
            </ul>
          </FooterNetworking>
          <FooterNav>
            <ul>
              <li><p>Information</p></li>
              <li>About</li>
              <li>Product</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li><p>Company</p></li>
              <li>Commuity</li>
              <li>Carrer</li>
              <li>Our Story</li>
            </ul>
            <ul>
              <li><p>Contact</p></li>
              <li>Getting Started</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </FooterNav>
        </FooterContent>
        <p>2023 all Right Reserved Term of use Revive Mart</p>
      </footer>
    </FooterBackground>
  )
}

export default Footer