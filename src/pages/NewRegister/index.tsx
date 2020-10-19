import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepTree from './components/StepTree';

import useForm from '../../hooks/useForm';

import imgConfirm from '../../assets/images/confirm.svg';

import { Title, Steps, ConfirmContainer, Image } from './styled';
import api from '../../services/api';
import { useToasts } from 'react-toast-notifications';

function NewRegister() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    username: '',
    password: '',
  };
  const [step, setStep] = useState<0 | 1 | 2 | 3>(1);
  const [registerConfirm] = useState<Boolean>(false);

  const { handleChange, values } = useForm(valuesInitials);

  const history = useHistory();
  const { addToast } = useToasts();

  function validationStep(stepValidation: number) {
    switch (stepValidation) {
      case 1:
        if (values.firstName === '') {
          alert('Preencha o primeiro nome');
          return false;
        }
        if (values.lastName === '') {
          alert('Preencha o sobrenome');
          return false;
        }
        if (values.dateOfBirth === '') {
          alert('Preencha a data de aniversário');
          return false;
        }
        if (values.email === '') {
          alert('Preencha o e-mail');
          return false;
        }
        break;
      case 2:
        if (values.username === '') {
          alert('Preencha o nome de usuário');
          return false;
        }
        if (values.password === '') {
          alert('Preencha a senha do usuário');
          return false;
        }

        break;
    }

    return true;
  }

  function handleStep(step: 0 | 1 | 2 | 3, to: 0 | 1 | 2 | 3) {
    if (step < to && !validationStep(step)) return null;

    setStep(to);
    return null;
  }

  function addNewStudent() {
    api
      .post('aluno', {
        pessoa: {
          nome: values.firstName,
          sobrenome: values.lastName,
          dataNascimento: values.dateOfBirth,
          email: values.email,
          usuario: values.username,
          senha: values.password,
        },
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Cadastro realizado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });

        history.push('/login');
      })
      .catch((err) => {
        console.error(err.response.data);
        addToast(
          'Houve um erro inesperado no cadastro, tente novamente mais tarde',
          {
            appearance: 'warning',
            autoDismiss: true,
          }
        );
      });
  }

  function handleConfirmRegister() {
    addNewStudent();
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
        <Image src={imgConfirm} alt="" />
      </ConfirmContainer>
    </PageDefault>
  );
}

export default NewRegister;
