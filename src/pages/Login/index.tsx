import React from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';
import { useAuth } from '../../contexts/auth';

import imgBackground from '../../assets/images/backgroundLogin.svg';

import {
  Title,
  Form,
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

  const { signIn } = useAuth();

  function handleSingIng() {
    signIn(values.username, values.password);
  }

  return (
    <PageDefault>
      <Title>Login</Title>
      <Form>
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
        </FieldSetWrapper>
      </Form>
      <LinkRecoveryPassword to="/recoveryPassword" title="Recupere sua senha">
        Esqueceu a Senha?
      </LinkRecoveryPassword>
      <Image src={imgBackground} alt="" />
      <Button color="primary-outline" onClick={handleSingIng}>
        Entrar
      </Button>
    </PageDefault>
  );
}

export default Login;
