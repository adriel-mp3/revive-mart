import styled, {keyframes} from 'styled-components'
import { NavLink } from 'react-router-dom';

const showLeft = keyframes`
  
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const NavList = styled.nav`
  display: flex;
  gap: 48px;
  animation: ${showLeft} .3s forwards;
  
  @media (max-width:1024px) {
    display: ${({ $isOpenMenu }) => $isOpenMenu ? 'block' : 'none'};
    position: absolute;
    background: ${({ theme }) => theme.colors.white90};
    height: 100vh;
    padding: 120px 20px 20px 20px;
    width: 200px;
    top: -60px;
    right: -20px;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
    z-index: 100;
    
    a {
      padding-top: 10px;
    }

    a + a {
      border-top: 1px solid #ccc;
    }
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.colors.gray50};
  font-size: ${({ theme }) => theme.fontSizes.base};
  
  &.active {
    color: ${({ theme }) => theme.colors.black90};
  }
`;