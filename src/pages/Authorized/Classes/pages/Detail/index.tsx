import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash, FiUser, FiSearch } from 'react-icons/fi';

import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import useForm from '../../../../../hooks/useForm';

import api from '../../../../../services/api';

import {
  FormFieldWrapper,
  HeaderStudent,
  StudentsList,
  Description,
  StudentItem,
  NameStudent,
  BirthDate,
  Details,
  Header,
  Name,
  Code,
  Info,
} from './styled';

import { ClassProps } from '../../interface';
import { ParamsProps, StudentProps, IStudent } from './interface';
import { useToasts } from 'react-toast-notifications';
import util from '../../../../../utils/util';

const ClassesUpdate: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listStudents, setListStudents] = useState<StudentProps[]>([]);
  const [classDetail, setClassDetail] = useState<ClassProps>({
    description: '',
    name: '',
    code: '',
  });

  const { idClass } = useParams<ParamsProps>();

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get(`/movAlunoTurma/turmaId/${idClass}`)
      .then(({ data }) => {
        const classFromApi: ClassProps = {
          name: data.turma.nome,
          description: data.turma.descricao,
          code: data.turma.codigo,
        };

        setClassDetail(classFromApi);

        const studentsFromApi: StudentProps[] = !!data.alunos
          ? data.alunos.map((student: IStudent) => {
              const newStudent: StudentProps = {
                studentId: student.alunoId,
                person: {
                  firstName: student.pessoa.nome,
                  lastName: student.pessoa.sobrenome,
                  dateOfBirth: util.getFormatDate(
                    student.pessoa.dataNascimento
                  ),
                  email: student.pessoa.email,
                  phone: !!student.pessoa.telefone
                    ? {
                        countryCode: student.pessoa.telefone.codigoDiscagem,
                        ddd: student.pessoa.telefone.ddd,
                        number: student.pessoa.telefone.numeroTelefone,
                        typeFone: student.pessoa.telefone.tipoTelefone,
                      }
                    : null,
                },
              };

              return newStudent;
            })
          : [];

        setListStudents(studentsFromApi);
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [idClass, addToast]);

  function handleListStudents(student: StudentProps) {
    return util.includesToArray(
      [student.person.firstName, student.person.lastName, student.person.email],
      values.search
    );
  }

  return (
    <PageAuthorized type="back" text="Turma">
      <Header>
        <Details>
          <Name>{classDetail.name}</Name>
          <Description>{classDetail.description}</Description>
          <Code>#{classDetail.code}</Code>
        </Details>
      </Header>

      <FormFieldWrapper>
        <FormField
          label="Pesquisar"
          name="search"
          value={values.search}
          onChange={handleChange}
        >
          <FiSearch />
        </FormField>
      </FormFieldWrapper>

      <StudentsList>
        {listStudents &&
          listStudents
            .filter((student) => handleListStudents(student))
            .map((Student: StudentProps) => (
              <StudentItem key={Student.studentId}>
                <HeaderStudent>
                  <FiUser />
                  <Info>
                    <NameStudent>
                      {Student.person.firstName} {Student.person.lastName}
                    </NameStudent>
                    <BirthDate>{Student.person.dateOfBirth}</BirthDate>
                  </Info>
                </HeaderStudent>
              </StudentItem>
            ))}
      </StudentsList>
    </PageAuthorized>
  );
};

export default ClassesUpdate;