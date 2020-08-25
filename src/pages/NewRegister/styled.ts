import styled, { css } from 'styled-components';
import { StepProps, ConfirmContainerProps } from './interface';

export const Title = styled.h1`
  padding: 120px 24px 40px;
  font-weight: 600;
  font-size: 3.2rem;
`;

export const Steps = styled.section<StepProps>`
  flex: 1;
  display: flex;
  position: relative;
  transition: all 320ms ease-in-out;

  ${({ step }) => css`
    form {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      opacity: 0;
      transform: scale(0);
      transition: all 320ms ease-in-out;

      &:nth-child(${step}) {
        transform: scale(1);
        opacity: 1;
      }
    }
  `}
`;

export const ConfirmContainer = styled.div<ConfirmContainerProps>`
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  background: ${(props) => props.theme.colors.tertiary};
  transform: scale(0);
  transition: transform 320ms ease-in-out;

  ${({ registerConfirm }) =>
    registerConfirm &&
    css`
      transform: scale(1);
    `}
`;

export const Image = styled.img``;
