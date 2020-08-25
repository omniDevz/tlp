import React from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import imgBackground from '../../assets/images/backgroundRecoveryPassword.svg';

import { Title, FieldSetWrapper, Description, Button, Image } from './styled';

function Login() {
  const valuesInitials = {
    recovery: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Recupere sua senha</Title>
      <FieldSetWrapper>
        <FormField
          label="E-mail ou CPF"
          name="recovery"
          value={values.recovery}
          onChange={handleChange}
        />
        <Description>
          Será enviado um código para seu e-mail, verifique seu spam
        </Description>
      </FieldSetWrapper>
      <Image src={imgBackground} alt="" />
      <Button typebutton="primary-outline">Enviar</Button>
    </PageDefault>
  );
}

export default Login;
