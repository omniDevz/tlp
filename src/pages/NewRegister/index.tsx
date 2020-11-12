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
import util from '../../utils/util';
import validation from '../../utils/validation';

function NewRegister() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    emailConfirmation: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  };
  const [step, setStep] = useState<0 | 1 | 2 | 3>(1);
  const [registerConfirm] = useState<Boolean>(false);

  const { handleChange, values } = useForm(valuesInitials);

  const history = useHistory();
  const { addToast } = useToasts();

  function validationStep(stepValidation: number) {
    switch (stepValidation) {
      case 1:
        if (!util.emptyValue(values.firstName, 'id_firstName')) {
          addToast('Preencha o primeiro nome', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (!util.emptyValue(values.lastName, 'id_lastName')) {
          addToast('Preencha o sobrenome', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (!util.emptyValue(values.dateOfBirth, 'id_dateOfBirth')) {
          addToast('Preencha a data de aniversário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (!validation.dateMinToDay(values.dateOfBirth)) {
          addToast('A data deve ser inferior ao dia de hoje', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_dateOfBirth')?.focus();
          return false;
        }
        if (!util.emptyValue(values.email, 'id_email')) {
          addToast('Preencha o e-mail', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (!validation.email(values.email)) {
          addToast('Preencha o e-mail corretamente', {
            appearance: 'warning',
            autoDismiss: true,
          });
          util.onFocus('id_email');
          return false;
        }
        if (
          !util.emptyValue(values.emailConfirmation, 'id_emailConfirmation')
        ) {
          addToast('Preencha a confirmação do e-mail', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }
        if (values.emailConfirmation !== values.email) {
          addToast('O e-mail e sua confirmação devem iguais', {
            appearance: 'warning',
            autoDismiss: true,
          });
          util.onFocus('id_email');
          return false;
        }
        return true;
      case 2:
        if (!util.emptyValue(values.username, 'id_username')) {
          addToast('Preencha o nome de usuário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (!util.emptyValue(values.password, 'id_password')) {
          addToast('Preencha a senha do usuário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (
          !util.emptyValue(
            values.passwordConfirmation,
            'id_passwordConfirmation'
          )
        ) {
          addToast('Preencha a senha do usuário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (values.password !== values.passwordConfirmation) {
          addToast('A senha e sua confirmação devem iguais', {
            appearance: 'warning',
            autoDismiss: true,
          });
          util.onFocus('id_password');
          return false;
        }
        return true;
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
