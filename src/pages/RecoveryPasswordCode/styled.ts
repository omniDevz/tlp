import styled from 'styled-components';

import { ButtonStyled } from '../../components/Button/styled';

export const Title = styled.h3`
  padding: 120px 24px 32px;
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
`;

export const FieldSetWrapper = styled.fieldset`
  padding: 0 24px;

  > div {
    margin-bottom: 12px;
  }
`;

export const ReSendEmail = styled.p`
  font-size: 1.6rem;
  display: block;
  text-align: center;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Image = styled.img`
  padding: 8px 24px;
`;

export const Button = styled(ButtonStyled)`
  margin-top: auto;
  margin-left: auto;
  margin-right: 24px;
  margin-bottom: 8px;
  width: calc(50% - 12px);
`;
