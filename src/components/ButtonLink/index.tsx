import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const ButtonLink: React.FC<ButtonProps> = ({
  to,
  title,
  children,
  typebutton,
}) => {
  return (
    <ButtonStyled to={to} title={title} typebutton={typebutton}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonLink;
