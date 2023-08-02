import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'

const FooterBackground = styled.div`
  background: var(--color-base);

  footer {
    max-width: 1600px;
    padding: 48px 20px;
    margin: 0 auto;
  }

  footer > p {
    color: var(--color-gray-70);
  }
`
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 5.25rem;
`

const Logo = styled.img`
  margin-bottom: 1.5rem;
`

const FooterNetworking = styled.div`
  p {
    color: var(--color-gray-70);
    max-width: 20ch;
    margin-bottom: 1.5rem;
    margin-left: 4px;
  }

  ul {
    display: flex;
    gap: 24px;
    margin-left: 4px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 48px;
    height: 48px;
    border: 1px solid var(--color-gray-70);
    border-radius: 50%;
  }
`

const FooterNav = styled.nav`
  display: flex;
  gap:3rem;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  ul > li {
    color: var(--color-gray-70);
    font-weight: 400;
  }
  ul > li:first-child {
    color: var(--color-gray-60);
    font-weight: 700;
  }
`

const Footer = () => {
  return (
    <FooterBackground>
      <footer>
        <FooterContent>
          <FooterNetworking>
            <Logo src={logo} alt="Logo svg" />
            <p>We help you find your dream plant</p>
            <ul>
              <li><img src={facebook} alt="Facebook logo" /></li>
              <li><img src={instagram} alt="Instagram logo" /></li>
              <li><img src={twitter} alt="Twitter logo" /></li>
            </ul>
          </FooterNetworking>
          <FooterNav>
            <ul>
              <li>Information</li>
              <li>About</li>
              <li>Product</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Company</li>
              <li>Commuity</li>
              <li>Carrer</li>
              <li>Our Story</li>
            </ul>
            <ul>
              <li>Contact</li>
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