import React from 'react';

import { CardClassWrapper, Circle, Title } from './styled';

import { ICardClass } from './interface';

const CardCourse: React.FC<ICardClass> = ({ classRoom }) => {
  return (
    <CardClassWrapper>
      <Circle />
      <Title>{classRoom.name}</Title>
    </CardClassWrapper>
  );
};

export default CardCourse;
