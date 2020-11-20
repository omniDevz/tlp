import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import RadioButton from '../../../components/RadioButton';
import CardCourse from './components/CardCourse';

import { useAuth } from '../../../contexts/auth';
import util from '../../../utils/util';
import api from '../../../services/api';

import { HeaderFilter, ListCard, PriceList, ButtonsWrapper } from './styled';

import { ICourseApi, ICourse } from './interface';
import constants from '../../../constants';

const Course: React.FC = () => {
  const [search, setSearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('');
  const [listCourse, setListCourse] = useState<ICourse[]>([]);
  const [listCourseSelected, setListCourseSelected] = useState<ICourse[]>([]);

  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

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
    api
      .get('curso')
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const coursesApi = response.data as ICourseApi[];

        const courses: ICourse[] = coursesApi.map((courseApi) => {
          return {
            courseId: courseApi.cursoId,
            description: courseApi.descricao,
            durationMinute: courseApi.duracaoMinutos,
            hasFree: courseApi.eGratuito,
            name: courseApi.nome,
            price: courseApi.valor,
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

  useEffect(handleGetCoursesFromApi, []);

  function handleBuyPagSeguroCourse() {
    if (!user?.studentId) return;

    const coursesBuyIds = listCourseSelected
      .filter((c) => c.price > 0)
      .map((course) => {
        return {
          id: course.courseId,
          description: course.name,
          amount: course.price.toFixed(2),
        };
      });

    return api.post('pagSeguro', {
      checkout: {
        sender: {
          name: `${user?.firstName} ${user?.lastName}`,
          email: `${user?.email}`,
        },
      },
      itens: [...coursesBuyIds],
    });
  }

  function handleGetCourseFree() {
    const coursesFreeIds = listCourseSelected
      .filter((c) => c.price === 0)
      .map((course) => {
        return course.courseId;
      });

    return api.post('movCursoAluno', {
      alunoId: user?.studentId,
      cursoIds: coursesFreeIds,
    });
  }

  function handleBuyCourse() {
    if (!user?.studentId) return;

    const coursesFreeIds = listCourseSelected
      .filter((c) => c.price === 0)
      .map((course) => {
        return course.courseId;
      });

    Promise.all([handleGetCourseFree(), handleBuyPagSeguroCourse()])
      .then(([responseFree, responsePagSeguro]) => {
        if (coursesFreeIds.length > 0 && responseFree.status === 206) {
          addToast(responseFree.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        if (responsePagSeguro?.status !== 206) {
          const { code } = responsePagSeguro?.data;

          util.clearAndSetCookie(
            constants.LIST_COURSE_CHECKOUT_PAGSEGURO,
            JSON.stringify(listCourseSelected.filter((c) => c.price > 0)),
            1
          );

          window.location.href = `${constants.URL_PAYMENT_PAGSEGURO}${code}`;
        } else {
          addToast('Cursos adquiridos com sucesso!', {
            appearance: 'info',
            autoDismiss: true,
          });
          history.push('/myCourses');
        }
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

  function handleGetTotalValuesInCourse() {
    let sum = 0;

    for (const course of listCourseSelected) {
      sum += course.price;
    }

    return sum;
  }

  function handleCourseInListInBuy(course: ICourse) {
    if (
      listCourseSelected.findIndex((c) => c.courseId === course.courseId) === -1
    ) {
      setListCourseSelected([...listCourseSelected, course]);
      return;
    }

    const newListCourseSelected = listCourseSelected.filter(
      (c) => c.courseId !== course.courseId
    );

    setListCourseSelected([...newListCourseSelected]);
  }

  const priceCourse =
    handleGetTotalValuesInCourse() === 0
      ? 'Grátis'
      : util.formatPrice(handleGetTotalValuesInCourse() * 100);

  return (
    <PageAuthorized type="back" text="Cursos disponíveis">
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
              <CardCourse
                key={course.courseId}
                handleCourseInListInBuy={handleCourseInListInBuy}
                course={course}
                active={
                  !!listCourseSelected.find(
                    (c) => c.courseId === course.courseId
                  )
                }
              />
            ))}
      </ListCard>

      {!!listCourseSelected.length && (
        <ButtonsWrapper>
          <PriceList>{priceCourse}</PriceList>
          <Button color="primary" onClick={handleBuyCourse}>
            Adquirir
          </Button>
        </ButtonsWrapper>
      )}
    </PageAuthorized>
  );
};

export default Course;
