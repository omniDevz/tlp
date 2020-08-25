import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepTree from './components/StepTree';

import useForm from '../../hooks/useForm';

import imgConfirm from '../../assets/images/confirm.svg';

import { Title, Steps, ConfirmContainer, Image } from './styled';

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
  const [step, setStep] = useState<0 | 1 | 2 | 3>(1);
  const [registerConfirm, setRegisterConfirm] = useState<Boolean>(false);

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

  function validationStepTwo() {
    if (values.username === '') {
      alert('Preencha o nome de usuário');
      return false;
    }
    if (values.password === '') {
      alert('Preencha a senha do usuário');
      return false;
    }

    return true;
  }

  function handleStep(step: 1 | 2 | 3, to: 0 | 1 | 2 | 3) {
    switch (step) {
      case 1:
        if (to === 0) {
          history.push('/');
          return null;
        }

        if (!validationStepOne()) return null;

        setStep(2);
        break;

      case 2:
        if (to === 1) {
          setStep(1);
          return null;
        }

        if (!validationStepTwo()) return null;

        setStep(3);
        break;

      case 3:
        setStep(2);
        break;
    }
  }

  function handleConfirmRegister() {
    setRegisterConfirm(true);

    setTimeout(() => {
      setRegisterConfirm(false);
      history.push('/');
    }, 2200);
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
        <StepTree
          handleStep={handleStep}
          handleConfirmRegister={handleConfirmRegister}
        />
      </Steps>
      <ConfirmContainer registerConfirm={registerConfirm}>
        <Image src={imgConfirm} />
      </ConfirmContainer>
    </PageDefault>
  );
}

export default NewRegister;
