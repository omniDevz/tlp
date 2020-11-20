import styled from 'styled-components';

export const HeaderFilter = styled.div`
  display: flex;
  grid-gap: .8rem;
  margin-bottom: .8rem;
  margin-top: 2.4rem;

  > button {
    width: 43.5%;
  }
`;

export const ListCard = styled.ul`
  padding: 1.6rem 0;
  height: calc(100% - 16rem);
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: .8rem;
  grid-gap: .8rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  width: 100%;
`;


export const PriceList = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.6rem;
  font-size: 2rem;
  font-weight: 500;
`;
