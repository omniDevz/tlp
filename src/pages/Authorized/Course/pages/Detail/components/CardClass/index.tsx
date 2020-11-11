import React from 'react';

import {
  CardClassWrapper,
  Description,
  Number,
  Infos,
  Title,
  Price,
} from './styled';

import { ICardClass } from './interface';

const CardCourse: React.FC<ICardClass> = ({ classRoom }) => {
  return (
    <CardClassWrapper>
      <Infos>
        <Number>{classRoom.numberClass}º aula</Number>
        <Title>{classRoom.name}</Title>
        <Description>{classRoom.description}</Description>
        <Price>{classRoom.timeMinutes} minutos</Price>
      </Infos>
    </CardClassWrapper>
  );
};

export default CardCourse;
