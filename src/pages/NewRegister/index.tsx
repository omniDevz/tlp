import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

import useForm from '../../hooks/useForm';

import { Title, Steps } from './styled';

function NewRegister() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    username: '',
    password: '',
  };
  const history = useHistory();
  const [step, setStep] = useState<'one' | 'two' | 'term'>('one');

  const { handleChange, values } = useForm(valuesInitials);

  function validationStepOne() {
    if (values.firstName === '') {
      alert('Preencha o primeiro nome');
      return false;
    }
    if (values.lastName === '') {
      alert('Preencha o sobrenome');
      return false;
    }
    if (values.birthDate === '') {
      alert('Preencha a data de aniversário');
      return false;
    }
    if (values.email === '') {
      alert('Preencha o e-mail');
      return false;
    }

    return true;
  }

  function handleStep(
    step: 'one' | 'two' | 'term',
    to: 'home' | 'one' | 'two' | 'term'
  ) {
    switch (step) {
      case 'one':
        if (to === 'home') {
          history.push('/');
          return null;
        }

        if (!validationStepOne()) return null;

        setStep('two');
        break;
    }
  }

  return (
    <PageDefault>
      <Title>Novo Cadastro</Title>
      <Steps step={step}>
        <StepOne
          handleStep={handleStep}
          handleChange={handleChange}
          values={values}
        />
        <StepTwo
          handleStep={handleStep}
          handleChange={handleChange}
          values={values}
        />
      </Steps>
    </PageDefault>
  );
}

export default NewRegister;
