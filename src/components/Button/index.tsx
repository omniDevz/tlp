import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ children, typebutton, onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick} typebutton={typebutton}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
