import React from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import imgBackground from '../../assets/images/backgroundRecoveryPasswordNew.svg';

import { Title, Form, FieldSetWrapper, Button, Image } from './styled';

function RecoveryPasswordNew() {
  const valuesInitials = {
    newPassword: '',
    confirmPassword: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Informe a nova senha</Title>
      <Form>
        <FieldSetWrapper>
          <FormField
            label="Nova senha"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            type="password"
          />
          <FormField
            label="Confirme a senha"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            type="password"
          />
        </FieldSetWrapper>
      </Form>
      <Image src={imgBackground} alt="" />
      <Button typebutton="primary-outline">Salvar</Button>
    </PageDefault>
  );
}

export default RecoveryPasswordNew;
