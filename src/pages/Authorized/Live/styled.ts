import styled from 'styled-components';

export const Description = styled.h4`
  padding: .8rem 24px;
  font-size: 2rem;
  text-align: center;
  position: absolute;
  left: -1px;
  right: -1px;
  bottom: -2px;
  background: linear-gradient(0deg, black -17%, transparent 100%);
  z-index: 1000;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const Stream = styled.div`
  margin: 0.8rem 0;
  box-shadow: var(--box-shadow);
  flex: 1;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  max-height: 80vh;
  position: relative;
  overflow: hidden;

  img {
    border-radius: 3.6rem;
    max-width: 100%;
    max-height: calc(80vh - 5px);
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

export const Frame = styled.iframe`
  position: absolute;
  left: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: none;
  transform: translateX(-50%);
`;
