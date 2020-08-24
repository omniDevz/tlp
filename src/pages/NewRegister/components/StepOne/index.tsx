import React from 'react';

import FormField from '../../../../components/FormField';

import backgroundNewRegister from '../../../../assets/images/backgroundNewRegister.svg';

import {
  Form,
  Fieldset,
  Legend,
  ButtonWrapper,
  Button,
  TwoFields,
} from './styled';

import { StepOneProps } from './interface';

const StepOne: React.FC<StepOneProps> = ({ values, handleChange }) => {
  return (
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
  );
};

export default StepOne;
