import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';

import api from '../../../services/api';
import util from '../../../utils/util';
import { useAuth } from '../../../contexts/auth';

import {
  ButtonWrapper,
  Descriptions,
  Information,
  TwoColumns,
  ListClass,
  ItemClass,
  Form,
  Name,
} from './styled';

import { ClassApiProps, ClassProps } from './interface';

const Classes: React.FC = () => {
  const [search, setSearch] = useState('');
  const [listClasses, setListClasses] = useState<ClassProps[]>();

  const { user } = useAuth();
  const { addToast } = useToasts();
  const history = useHistory();

  function handleNotHasClass() {
    history.push('/classes/new');
    addToast('Comece agora mesmo o estudo com sua primeira turma!', {
      appearance: 'info',
      autoDismiss: true,
    });
  }

  function handleGetClassInStudent() {
    api
      .get(`movAlunoTurma/alunoId/${user?.studentId}`)
      .then(({ data }) => {
        console.log(data);
        const classFromApi: ClassProps[] = data.map((c: ClassApiProps) => {
          const newClass: ClassProps = {
            classId: c.turmaId,
            name: c.nome,
            description: c.descricao,
            students: c.quantidadeAlunos,
          };

          return newClass;
        });

        setListClasses(classFromApi);

        if (classFromApi.length > 0) return;
        handleNotHasClass();
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado na consulta de turma, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetClassInStudent, [user, addToast]);

  function handleFilterClasses(c: ClassProps): boolean {
    return util.includesToArray([c.name, c.description], search);
  }

  return (
    <PageAuthorized type="back" text="Turmas">
      <Form>
        <FormField
          label="Pesquisar"
          name="search"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </Form>
      <ListClass>
        {listClasses &&
          listClasses
            .filter((className) => handleFilterClasses(className))
            .map(({ classId, name, description, students }) => (
              <ItemClass key={classId}>
                <Descriptions>
                  <Name>{name}</Name>
                  <Information>{description}</Information>
                  <TwoColumns>
                    <Information>
                      <b>{students}</b> alunos
                    </Information>
                  </TwoColumns>
                </Descriptions>
                <Link to={`/classes/${classId}`} title="Detalhes da turma">
                  <FiUsers />
                </Link>
              </ItemClass>
            ))}
      </ListClass>
      <ButtonWrapper>
        <Button color="primary" to="/classes/new">
          Nova turma
        </Button>
      </ButtonWrapper>
    </PageAuthorized>
  );
};

export default Classes;
