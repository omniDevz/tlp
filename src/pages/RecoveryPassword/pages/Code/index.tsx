import React from 'react';

import PageDefault from '../../../../components/PageDefault';
import FormField from '../../../../components/FormField';

import useForm from '../../../../hooks/useForm';

import imgBackground from '../../../../assets/images/backgroundRecoveryPasswordCode.svg';

import { Title, FieldSetWrapper, ReSendEmail, Button, Image } from './styled';

function RecoveryPasswordCode() {
  const valuesInitials = {
    code: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Recebeu o código?</Title>
      <FieldSetWrapper>
        <FormField
          label="Código"
          name="code"
          value={values.code}
          onChange={handleChange}
        />
        <ReSendEmail>
          Não recebeu? clique aqui para enviar novamente
        </ReSendEmail>
      </FieldSetWrapper>
      <Image src={imgBackground} alt="" />
      <Button color="primary-outline">Continuar</Button>
    </PageDefault>
  );
}

export default RecoveryPasswordCode;
