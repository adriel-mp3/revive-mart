import styled from "styled-components";
import img from '../../assets/hero-image.jpg';

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-left: 2.81rem;
  gap: 40px;
  background-color: var(--color-base);
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 6rem;
`;

export const SideInfo = styled.div``;

export const Title = styled.h1`
  color: var(--black);
  font-weight: 800;
  font-size: var(--xl);
  line-height: 4rem;
  margin-bottom: 1.5rem;
`;

export const TitleLabel = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 1.5rem;
`;

export const Label = styled.p`
  font-size: var(--lg);
  color: var(--gray-100);
`;

export const LabelInfo = styled.span`
  display: block;
  font-size: var(--base);
  color: var(--gray-100);
`;

export const LabelContainer = styled.div`
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
    background: var(--gray-50);
  }
`;

export const HeroImg = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  max-width: 800px;
  height: 512px;
`;
