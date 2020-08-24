import styled, { css } from 'styled-components';
import { ButtonProps } from './interface';

export const ButtonStyled = styled.button<ButtonProps>`
  padding: 1rem 2.4rem;
  text-align: center;
  width: 90%;
  max-width: 240px;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 auto;

  ${(props) => {
    if (props.typebutton === 'primary')
      return css`
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.tertiary};
      `;
    else if (props.typebutton === 'primary-outline')
      return css`
        background: transparent;
        border: 2px solid ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.primary};
      `;
    else if (props.typebutton === 'secondary')
      return css`
        background: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.tertiary};
      `;
  }}
`;
