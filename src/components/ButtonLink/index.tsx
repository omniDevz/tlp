import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const ButtonLink: React.FC<ButtonProps> = ({
  to,
  title,
  children,
  typeButton,
}) => {
  return (
    <ButtonStyled to={to} title={title} typeButton={typeButton}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonLink;
