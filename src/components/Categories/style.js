import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  background: ${({ theme }) => theme.colors.base};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 5rem 1.25rem;
`
export const CategoriesContainer = styled.section`
  margin-bottom: 6rem;
`
export const CategoriesTitle = styled.h2`
  text-align: center;
`
export const CategoriesText = styled.p`
  text-align: center;
  margin-bottom: 6rem;
`
export const CategoriesCards = styled.ul`
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
export const CategorieCard = styled.li`

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
`

export const CardTitle = styled.h3`
  text-align: center;
  margin-top: .75rem;
  color:${({ theme }) => theme.colors.gray60};
  font-weight: 700;
  font-size: var(--base);
  margin-bottom: .75rem;
`

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin: 0 auto;
  max-width: 30ch;
  text-align: center;
  margin-bottom: 1.5rem;
`