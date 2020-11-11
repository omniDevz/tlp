import React from 'react';
import { useHistory } from 'react-router-dom';

import { CardCourseWrapper, Description, Infos, Title } from './styled';

import { ICardCourse } from './interface';

const CardCourse: React.FC<ICardCourse> = ({ course }) => {
  const history = useHistory();

  function handleGoDetailCourse() {
    history.push(`/myCourses/${course.courseId}`);
  }

  return (
    <CardCourseWrapper onClick={handleGoDetailCourse}>
      <Infos>
        <Title>{course.name}</Title>
        <Description>{course.description}</Description>
        <Description>{course.durationMinute} minutos</Description>
      </Infos>
    </CardCourseWrapper>
  );
};

export default CardCourse;
