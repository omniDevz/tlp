import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useHistory, useLocation } from 'react-router-dom';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import RadioButton from '../../../components/RadioButton';
import CardCourse from './components/CardCourse';

import { useAuth } from '../../../contexts/auth';
import api from '../../../services/api';
import util from '../../../utils/util';
import constants from '../../../constants';

import { ButtonWrapper, HeaderFilter, ListCard } from './styled';

import { ICourse, ICourseApi } from './interface';

const Course: React.FC = () => {
  const [search, setSearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('');
  const [listCourse, setListCourse] = useState<ICourse[]>([]);
  const [courseBuy, setCourseBuy] = useState(false);

  const { addToast } = useToasts();
  const { user } = useAuth();

  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const idTransaction = query.get('idTransaction');

  const courses: ICourse[] = JSON.parse(
    util.getCookie(constants.LIST_COURSE_CHECKOUT_PAGSEGURO) || '[]'
  );

  function handleSetNewCourseInStudent() {
    if (!user?.studentId || !courses?.length || !idTransaction || courseBuy)
      return;
    setCourseBuy(true);

    if (!courses.length) return;

    api
      .post('venda', {
        alunoId: user?.studentId,
        dataHora: new Date(Date.now()).toJSON(),
        codigo: idTransaction,
        ultimoUsuarioAlteracao: user?.personId,
        vendaDetalhe: courses.map((course) => {
          return {
            cursoId: course.courseId,
            valor: course.price.toFixed(2),
            ultimoUsuarioAlteracao: user?.personId,
          };
        }),
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'error',
            autoDismiss: true,
          });
          return;
        }

        util.deleteCookie(constants.LIST_COURSE_CHECKOUT_PAGSEGURO);

        addToast('Curso adquirido com sucesso! Boas aulas!', {
          appearance: 'info',
          autoDismiss: true,
        });
        handleGetCoursesFromApi();
      })
      .catch((err) => {
        console.log(err.response);
        addToast(
          'Houve algum erro inesperado ao solicitar a compra, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleGetNewCourse() {
    history.push('/course');
  }

  function handleFilterCoursesByPrice(course: ICourse) {
    if (!typeSearch) return true;

    return (
      (typeSearch === 'P' && !course.hasFree) ||
      (typeSearch === 'G' && course.hasFree)
    );
  }

  function handleFilterCourses(course: ICourse) {
    return util.includesToArray([course.name, course.description], search);
  }

  function handleGetCoursesFromApi() {
    if (!user?.studentId) return;

    api
      .get(`movCursoAluno/alunoId/${user?.studentId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const coursesApi = response.data as ICourseApi[];

        const courses: ICourse[] = coursesApi.map((curso) => {
          return {
            courseId: curso.cursoId,
            description: curso.descricao,
            durationMinute: curso.duracaoMinutos,
            hasFree: curso.eGratuito,
            name: curso.nome,
            price: curso.valor,
          } as ICourse;
        });

        setListCourse(courses);
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

  useEffect(handleGetCoursesFromApi, [user]);
  useEffect(handleSetNewCourseInStudent, [
    user,
    courses,
    idTransaction,
    listCourse,
  ]);

  return (
    <PageAuthorized type="back" text="Cursos adquiridos">
      <HeaderFilter>
        <FormField
          label=""
          name="search"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <Button color="secondary-outline" onClick={handleGetCoursesFromApi}>
          Pesquisar
        </Button>
      </HeaderFilter>

      <RadioButton
        name="typeSearch"
        options={[
          {
            label: 'Todos',
            value: '',
          },
          {
            label: 'Pagos',
            value: 'P',
          },
          {
            label: 'Gratuitos',
            value: 'G',
          },
        ]}
        value={typeSearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTypeSearch(e.target.value)
        }
      />

      <ListCard>
        {!!listCourse.length &&
          listCourse
            .filter(handleFilterCoursesByPrice)
            .filter(handleFilterCourses)
            .map((course) => (
              <CardCourse key={course.courseId} course={course} />
            ))}
      </ListCard>

      <ButtonWrapper>
        <Button color="primary-outline" onClick={handleGetNewCourse}>
          Adquira mais cursos
        </Button>
      </ButtonWrapper>
    </PageAuthorized>
  );
};

export default Course;
