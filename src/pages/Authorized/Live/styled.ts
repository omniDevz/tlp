import styled from 'styled-components';

export const Description = styled.h4`
  padding: 1.2rem 24px 0;
  font-size: 2rem;
  text-align: center;
`;

export const Stream = styled.div`
  margin: 0.8rem 24px;
  border-radius: 4rem;
  box-shadow: var(--box-shadow);
  flex: 1;
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  max-height: 62vh;

  img {
    border-radius: 3.6rem;
    max-width: 100%;
    max-height: calc(62vh - 5px);
    height: auto;
    width: 100%;
    object-fit: cover;
    flex: 1;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 24px 3.2rem;
`;

export const Teacher = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Name = styled.label`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`;
