import React from 'react';
import { useHistory } from 'react-router-dom';

import util from '../../../../../utils/util';

import {
  CardCourseWrapper,
  DetailCourse,
  Description,
  Infos,
  Props,
  Title,
  Price,
} from './styled';

import { ICardCourse } from './interface';

const CardCourse: React.FC<ICardCourse> = ({
  course,
  active,
  handleCourseInListInBuy,
}) => {
  const history = useHistory();

  function handleGoDetailCourse() {
    history.push(`/course/${course.courseId}`);
  }

  const priceCourse =
    course.price === 0 ? 'Grátis' : util.formatPrice(course.price * 100);

  return (
    <CardCourseWrapper
      active={active}
      onClick={() => handleCourseInListInBuy(course)}
    >
      <Infos>
        <Title>{course.name}</Title>
        <Description>{course.description}</Description>
        <Description>{course.durationMinute} minutos</Description>
      </Infos>
      <Props>
        <Price>{priceCourse}</Price>
        <DetailCourse
          title="Detalhes do curso"
          onClick={handleGoDetailCourse}
        />
      </Props>
    </CardCourseWrapper>
  );
};

export default CardCourse;
