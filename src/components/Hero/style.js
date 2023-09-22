import styled from "styled-components";
import img from '../../assets/hero-image.jpg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 40px;
  margin: 0 1.25rem 6rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.base};
  border-radius: 14px;
  overflow: hidden;

  @media (max-width:1024px) {
    grid-template-columns: 1fr;
    margin:0 1.25rem 4rem 1.25rem;
    gap:0px;
    display: block;
    padding: 60px 0;
  }
`;

export const Background = styled.main`
  margin: 0 auto;
  max-width: 1600px;

`

export const Side = styled.div`
  padding-left: 2.81rem;
  margin-left: 20px;
  h1 {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 4rem;
    margin-bottom: 1.5rem;
  }

@media (max-width:1024px) {
  padding-left: 1rem;
  margin-left: 0px;
}

@media (max-width:768px) {
  h1 {
    font-size:2.2rem;
    line-height: 3rem;
  }
}
`;

export const Label = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 1.5rem;

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray100};
  }

  span {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color:${({ theme }) => theme.colors.gray100};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:last-child::after {
    content: "";
    display: block;
    position: absolute;
    height: 64px;
    width: 2px;
    left: -30px;
    top: 10px;
    background: ${({ theme }) => theme.colors.gray50};
  }
`;

export const HeroImg = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 512px;
  
  @media (max-width:1024px) {
    display: none;
    background-image: none;
  }
`;
