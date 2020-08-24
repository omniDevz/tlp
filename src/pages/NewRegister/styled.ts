import styled, { css } from 'styled-components';
import { StepProps } from './interface';

export const Title = styled.h1`
  padding: 120px 24px 48px;
  font-weight: 600;
  font-size: 3.2rem;
`;

export const Steps = styled.section<StepProps>`
  display: flex;
  flex: 1;
  transition: all 320ms ease-in-out;

  ${({ step }) => {
    switch (step) {
      case 'one':
        return css`
          transform: translateX(0);
        `;
      case 'two':
        return css`
          transform: translateX(-100%);
        `;
    }
  }}
`;
