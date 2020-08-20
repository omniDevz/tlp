import styled, { css } from 'styled-components';
import { ButtonProps } from './interface';

export const ButtonStyled = styled.button<ButtonProps>`
  padding: 1rem 2.4rem;
  text-align: center;
  width: 240px;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 auto;

  ${(props) => {
    if (props.typeButton === 'primary')
      return css`
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.tertiary};
      `;
    else if (props.typeButton === 'secondary')
      return css`
        background: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.tertiary};
      `;
  }}
`;
