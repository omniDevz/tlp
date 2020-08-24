import React from 'react';
import PageDefault from '../../components/PageDefault';

import StepOne from './components/StepOne';

import useForm from '../../hooks/useForm';

import { Title } from './styled';

function NewRegister() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Novo Cadastro</Title>
      <StepOne handleChange={handleChange} values={values} />
    </PageDefault>
  );
}

export default NewRegister;
