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

const StepOne: React.FC<StepOneProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  return (
    <Form
      background={backgroundNewRegister}
      id="stepOne"
      onSubmit={() => handleStep(1, 2)}
    >
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
        <FormField
          label="Confirme seu e-mail"
          name="emailConfirmation"
          value={values.emailConfirmation}
          onChange={handleChange}
          type="email"
        />
      </Fieldset>
      <ButtonWrapper>
        <Button onClick={() => handleStep(1, 2)} color="primary">
          Continuar
        </Button>
        <Button onClick={() => handleStep(1, 0)} color="primary-outline">
          Cancelar
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default StepOne;
