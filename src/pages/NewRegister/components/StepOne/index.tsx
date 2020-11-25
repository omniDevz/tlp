import React from 'react';
import { useHistory } from 'react-router-dom';

import FormField from '../../../../components/FormField';

import backgroundNewRegister from '../../../../assets/images/backgroundNewRegister.svg';

import {
  ButtonWrapper,
  TwoFields,
  Fieldset,
  Legend,
  Button,
  Form,
} from './styled';

import { StepOneProps } from './interface';

const StepOne: React.FC<StepOneProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

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
            maxLength={40}
          />
          <FormField
            label="Sobrenome"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            maxLength={40}
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
          maxLength={254}
        />
        <FormField
          label="Confirme seu e-mail"
          name="emailConfirmation"
          value={values.emailConfirmation}
          onChange={handleChange}
          type="email"
          maxLength={254}
        />
      </Fieldset>
      <ButtonWrapper>
        <Button onClick={() => handleStep(1, 2)} color="primary">
          Continuar
        </Button>
        <Button onClick={handleGoBack} color="primary-outline">
          Cancelar
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default StepOne;
