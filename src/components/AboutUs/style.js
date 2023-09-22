import styled from 'styled-components';
import arrow from '../../assets/custom-direct-arrow.svg'

export const Container = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 10rem;

  h2 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: .75rem;
    position: relative;
    display: flex;
    justify-content: center;
    
    &::before {
      content: '';
      display: block;
      position: absolute;
      background: url(${arrow});
      width: 73px;
      height: 24px;
      top:20px;
      padding-right: 300px;
      background-repeat: no-repeat;
   }
  }
  p {
    text-align: center;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.gray50};
    margin-bottom: 3rem;
  }

  @media (max-width:1024px) {
    margin-bottom: 5rem;
    h2 {
      &::before {
        display: none;
      }
    }
    p {
      margin-bottom: 2rem;
    }
  }
`

export const Cards = styled.ul`
  display: flex;
  justify-content: space-between;
  
  gap: 1.5rem;

  @media (max-width:1024px) {
    flex-direction: column;
    align-items: initial;
    gap:0px;
  }
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardTitle = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 700;
  color:${({ theme }) => theme.colors.black90};
  margin-bottom: .75rem;
`


export const CardText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray50};
  max-width: 35ch;
`

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1.75rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background:${({ theme }) => theme.colors.base};
  margin-bottom: 1.5rem;
`
