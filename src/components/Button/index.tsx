import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ children, typeButton, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} typeButton={typeButton}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
