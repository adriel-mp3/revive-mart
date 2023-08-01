import styled from 'styled-components';
import arrow from '../../assets/custom-direct-arrow.svg'
export const AboutContainer = styled.section`
  margin-bottom: 10rem;
`

export const AboutTitle = styled.h2`
  font-weight: 700;
  font-size: var(--lg);
  text-align: center;
  color: var(--color-gray-60);
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
`

export const AboutText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: var(--base);
  color: var(--color-gray-50);
  margin-bottom: 3rem;
`

export const AboutCards = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`

export const AboutCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardTitle = styled.h3`
  text-align: center;
  font-size: var(--base);
  font-weight: 700;
  color:var(--color-black-90);
  margin-bottom: .75rem;
`


export const CardText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: var(--base);
  color: var(--color-gray-50);
  max-width: 35ch;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1.75rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background:var(--color-base);
  margin-bottom: 1.5rem;
`

export const CardImage = styled.img`
  
`