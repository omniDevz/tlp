import React from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import imgBackground from '../../assets/images/backgroundLogin.svg';

import {
  Title,
  FieldSetWrapper,
  LinkRecoveryPassword,
  Button,
  Image,
} from './styled';

function Login() {
  const valuesInitials = {
    username: '',
    password: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Login</Title>
      <FieldSetWrapper>
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
          onChange={handleChange}
          type="password"
        />
        <LinkRecoveryPassword to="/recoveryPassword" title="Recupere sua senha">
          Esqueceu a Senha?
        </LinkRecoveryPassword>
      </FieldSetWrapper>
      <Image src={imgBackground} alt="" />
      <Button typebutton="primary-outline">Entrar</Button>
    </PageDefault>
  );
}

export default Login;
