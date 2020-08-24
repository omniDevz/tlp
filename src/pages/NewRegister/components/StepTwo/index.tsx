import React from 'react';

import FormField from '../../../../components/FormField';

import backgroundNewRegister from '../../../../assets/images/backgroundNewRegisterStepTwo.svg';

import {
  Form,
  Fieldset,
  Legend,
  ButtonWrapper,
  Button,
  TwoFields,
} from './styled';

import { StepTwoProps } from './interface';

const StepTwo: React.FC<StepTwoProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  return (
    <Form background={backgroundNewRegister} id="stepTwo">
      <Fieldset>
        <Legend>Dados Pessoais</Legend>
        <TwoFields>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <FormField
            label="Senha"
            name="password"
            value={values.password}
            type="password"
            onChange={handleChange}
          />
        </TwoFields>
      </Fieldset>
      <ButtonWrapper>
        <Button
          onClick={() => handleStep('two', 'one')}
          typeButton="primary-outline"
        >
          Voltar
        </Button>
        <Button onClick={() => handleStep('two', 'term')} typeButton="primary">
          Continuar
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default StepTwo;
