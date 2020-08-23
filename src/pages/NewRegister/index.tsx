import React from 'react';
import FormField from '../../components/FormField';
import PageDefault from '../../components/PageDefault';

import useForm from '../../hooks/useForm';

import backgroundNewRegister from '../../assets/images/backgroundNewRegister.svg';

import {
  Title,
  Form,
  Fieldset,
  Legend,
  ButtonWrapper,
  Button,
  TwoFields,
} from './styled';

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

      <Form background={backgroundNewRegister}>
        <Fieldset>
          <Legend>Dados Pessoais</Legend>
          <TwoFields>
            <FormField
              label="Nome"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <FormField
              label="Sobrenome"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </TwoFields>

          <FormField
            label="Data de nascimento"
            name="birthDate"
            value={values.birthDate}
            onChange={handleChange}
            type="date"
          />
          <FormField
            label="E-mail"
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
          />
        </Fieldset>
        <ButtonWrapper>
          <Button typeButton="primary-outline">Cancelar</Button>
          <Button typeButton="primary">Continuar</Button>
        </ButtonWrapper>
      </Form>
    </PageDefault>
  );
}

export default NewRegister;
