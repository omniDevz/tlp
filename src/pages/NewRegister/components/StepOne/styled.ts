import styled from 'styled-components';

import ButtonStyled from '../../../../components/Button';

import { FormProps } from './interface';

export const Form = styled.form<FormProps>`
  background-image: url(${({ background }) => background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  flex: 1;

  > div {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TwoFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
`;

export const Legend = styled.legend`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 2.4rem;
  padding-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 16px;
  justify-content: flex-end;
`;

export const Button = styled(ButtonStyled)`
  margin-right: 0;
`;
