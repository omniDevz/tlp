import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import PageAuthorized from '../../../../../components/PageAuthorized';

import CardClass from './components/CardClass';

import { useAuth } from '../../../../../contexts/auth';
import api from '../../../../../services/api';

import { ClassesWrapper, ButtonsWrapper, ClassStream } from './styled';

import {
  IClass,
  ICourseDetailParams,
  ICourseDetail,
  ICourseApiDetail,
} from './interface';

const Detail: React.FC = () => {
  const [course, setCourse] = useState<ICourseDetail>({} as ICourseDetail);
  const [listClass, setListClass] = useState<IClass[]>([]);
  const [classActive, setClassActive] = useState<IClass>({} as IClass);

  const { idMyCourse } = useParams() as ICourseDetailParams;
  const { addToast } = useToasts();
  const { user } = useAuth();

  function handleGetCourseFromApi() {
    console.log(idMyCourse);

    if (!user?.studentId) return;

    api
      .get(
        `movCursoAluno/cursoAulas/cursoId=${idMyCourse}&alunoId=${user?.studentId}`
      )
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
        setClassActive(classes[0]);
      })
      .catch((err) => {
        console.log(err.response);
        addToast(
          'Houve algum erro inesperado na busca por cursos, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetCourseFromApi, [user, idMyCourse]);

  return (
    <PageAuthorized type="back" text={course.name}>
      <ClassStream src={!!classActive.link ? classActive.link : ''} />
      <ClassesWrapper>
        {!!listClass.length &&
          listClass.map((c) => (
            <CardClass
              key={c.classId}
              classRoom={c}
              active={classActive.classId === c.classId}
              setActive={setClassActive}
            />
          ))}
      </ClassesWrapper>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={() => {}}>
          Detalhes do curso
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default Detail;
