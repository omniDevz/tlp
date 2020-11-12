import React from 'react';

import { CardClassWrapper, Circle, Title } from './styled';

import { ICardClass } from './interface';

const CardCourse: React.FC<ICardClass> = ({ classRoom, active, setActive }) => {
  function handleSetNewActive() {
    if (active) return;

    setActive(classRoom);
  }

  return (
    <CardClassWrapper active={active} onClick={handleSetNewActive}>
      <Circle />
      <Title>{classRoom.name}</Title>
    </CardClassWrapper>
  );
};

export default CardCourse;
