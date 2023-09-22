import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 12rem;

  h2 {
    font-size:${({ theme }) => theme.fontSizes.lg};
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 6rem;
  }
`
export const Background = styled.div`
  background: ${({ theme }) => theme.colors.base};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 5rem 1.25rem;
`

export const Cards = styled.ul`
  width: 100%;
  max-width: 1600px;
  justify-content: space-between;
  gap:20px;
  display: flex;
  flex: 1;

  @media (max-width:1024px) {
    flex-direction:column;
    align-items: center;
}
`
export const Card = styled.li`
  
  &:first-child {
    padding-top: 5rem;
  }

  &:nth-child(odd) {
    position: relative;
    top:-3.15rem;

    @media (max-width:1024px) {
      position: initial;
    }
  }

  &:nth-child(even) {
    margin-top: 3rem;
  }

  h3 {
    text-align: center;
    margin-top: .75rem;
    color:${({ theme }) => theme.colors.gray60};
    font-weight: 700;
    font-size:${({ theme }) => theme.fontSizes.medium};
    margin-bottom: .75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray50};
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin: 0 auto;
    max-width: 30ch;
    text-align: center;
    margin-bottom: 1.5rem;
    }
`
