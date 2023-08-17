import styled from 'styled-components';

export const FooterBackground = styled.div`
  background: ${({ theme }) => theme.colors.base};

  footer {
    max-width: 1600px;
    padding: 48px 20px;
    margin: 0 auto;
  }

  footer > p {
    color: ${({ theme }) => theme.colors.gray70};
  }
`
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 5.25rem;

  @media (max-width:768px) {
    grid-template-columns: 1fr;
  }
`

export const Logo = styled.img`
  margin-bottom: 1.5rem;
`

export const FooterNetworking = styled.div`
  p {
    color: ${({ theme }) => theme.colors.gray70};
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
    border: 1px solid ${({ theme }) => theme.colors.gray70};
    border-radius: 50%;
  }
  @media (max-width:768px) {
    margin-bottom: 4rem;
  }
`

export const FooterNav = styled.nav`
  display: flex;
  gap:3rem;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  ul > li {
    color: ${({ theme }) => theme.colors.gray70};
    font-weight: 400;
  }
  ul > li:first-child {
    color: ${({ theme }) => theme.colors.gray60};
    font-weight: 700;
  }
`