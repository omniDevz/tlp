import React from 'react';

import FormField from '../../../../components/FormField';

import backgroundNewRegister from '../../../../assets/images/backgroundNewRegisterStepTwo.svg';

import {
  ButtonWrapper,
  Fieldset,
  Fields,
  Legend,
  Button,
  Form,
} from './styled';

import { StepTwoProps } from './interface';

const StepTwo: React.FC<StepTwoProps> = ({
  handleChange,
  handleStep,
  values,
}) => {
  return (
    <Form
      background={backgroundNewRegister}
      id="stepTwo"
      onSubmit={() => handleStep(2, 3)}
    >
      <Fieldset>
        <Legend>Dados Pessoais</Legend>
        <Fields>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
            maxLength={15}
          />
          <FormField
            label="Senha"
            name="password"
            value={values.password}
            type="password"
            onChange={handleChange}
            maxLength={32}
          />
          <FormField
            label="Confirme a senha"
            name="passwordConfirmation"
            value={values.passwordConfirmation}
            type="password"
            onChange={handleChange}
            maxLength={32}
          />
        </Fields>
      </Fieldset>
      <ButtonWrapper>
        <Button onClick={() => handleStep(2, 3)} color="primary">
          Continuar
        </Button>
        <Button onClick={() => handleStep(2, 1)} color="primary-outline">
          Voltar
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default StepTwo;
