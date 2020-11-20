import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import PageAuthorized from '../../../../../components/PageAuthorized';

import CardClass from './components/CardClass';

import { useAuth } from '../../../../../contexts/auth';
import api from '../../../../../services/api';
import util from '../../../../../utils/util';
import constants from '../../../../../constants';

import {
  ClassesWrapper,
  ButtonsWrapper,
  ContentCourse,
  Description,
  TimeCourse,
  Content,
  Price,
} from './styled';

import {
  IClass,
  ICourseDetailParams,
  ICourseDetail,
  ICourseApiDetail,
} from './interface';

const Detail: React.FC = () => {
  const [course, setCourse] = useState<ICourseDetail>({} as ICourseDetail);
  const [listClass, setListClass] = useState<IClass[]>([]);

  const { idCourse } = useParams() as ICourseDetailParams;
  const { addToast } = useToasts();
  const { user } = useAuth();

  const history = useHistory();

  function handleGetCourseFromApi() {
    api
      .get(`curso/byId/${idCourse}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const courseApi = response.data as ICourseApiDetail;

        const classes = courseApi.aulas.map((classApi) => {
          return {
            classId: classApi.aulaId,
            courseId: classApi.cursoId,
            description: classApi.descricao,
            link: classApi.linkVideo,
            name: classApi.nome,
            numberClass: classApi.numeroAula,
            timeMinutes: classApi.duracaoMinutos,
          } as IClass;
        });

        setCourse({
          courseId: courseApi.cursoId,
          description: courseApi.descricao,
          durationMinute: courseApi.duracaoMinutos,
          hasFree: courseApi.eGratuito,
          name: courseApi.nome,
          price: courseApi.valor,
        });

        setListClass(classes);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por cursos, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetCourseFromApi, []);

  function handleBuyPagSeguroCourse() {
    if (!user?.studentId) return;

    api
      .post('pagSeguro', {
        checkout: {
          sender: {
            name: `${user?.firstName} ${user?.lastName}`,
            email: `${user?.email}`,
          },
        },
        itens: [
          {
            id: idCourse,
            description: course.name,
            amount: course.price.toFixed(2),
          },
        ],
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const { code } = response.data;

        util.clearAndSetCookie(constants.CODE_CHECKOUT_PAGSEGURO, code, 1);
        util.clearAndSetCookie(
          constants.LIST_COURSE_CHECKOUT_PAGSEGURO,
          JSON.stringify([course]),
          1
        );

        window.location.href = `${constants.URL_PAYMENT_PAGSEGURO}${code}`;
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado ao solicitar a compra, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleGetCourseFree() {
    if (!user?.studentId) return;

    api
      .post('movCursoAluno', {
        alunoId: user?.studentId,
        cursoIds: [idCourse],
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Curso adquirido com sucesso! Boas aulas!', {
          appearance: 'info',
          autoDismiss: true,
        });
        history.push('/myCourses');
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por cursos, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleBuyCourse() {
    if (course.price === 0) handleGetCourseFree();
    else handleBuyPagSeguroCourse();
  }

  const priceCourse =
    course.price === 0 ? 'Grátis' : util.formatPrice(course.price * 100);

  return (
    <PageAuthorized type="back" text={course.name}>
      <Description>Descrição: {course.description}</Description>
      <ContentCourse>
        <Content>Conteúdo do curso</Content>
        <TimeCourse>
          {listClass.length} aulas | {course.durationMinute} minutos
        </TimeCourse>
      </ContentCourse>
      <ClassesWrapper>
        {!!listClass.length &&
          listClass.map((c) => <CardClass key={c.classId} classRoom={c} />)}
      </ClassesWrapper>
      <ButtonsWrapper>
        <Price>{priceCourse}</Price>
        <Button color="primary" onClick={handleBuyCourse}>
          Adquirir
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default Detail;
