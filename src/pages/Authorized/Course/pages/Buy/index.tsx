import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import constants from '../../../../../constants';

import { useAuth } from '../../../../../contexts/auth';
import api from '../../../../../services/api';
import util from '../../../../../utils/util';

const CourseBuy: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const idTransaction = query.get('idTransaction');
  const history = useHistory();

  const { addToast } = useToasts();
  const { user } = useAuth();

  const idCourse = util.getCookie(constants.COURSE_CHECKOUT_PAGSEGURO);
  const amountCourse = util.getCookie(constants.AMOUNT_CHECKOUT_PAGSEGURO);

  function handleSetNewCourseInStudent() {
    if (!user?.studentId || !idCourse || !amountCourse || !idTransaction)
      return;

    api
      .post('venda', {
        alunoId: user?.studentId,
        dataHora: new Date(Date.now()).toJSON(),
        codigo: idTransaction,
        ultimoUsuarioAlteracao: user?.personId,
        vendaDetalhe: [
          {
            cursoId: idCourse,
            valor: amountCourse,
            ultimoUsuarioAlteracao: user?.personId,
          },
        ],
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'error',
            autoDismiss: true,
          });
          return;
        }

        util.deleteCookie(constants.CODE_CHECKOUT_PAGSEGURO);
        util.deleteCookie(constants.COURSE_CHECKOUT_PAGSEGURO);
        util.deleteCookie(constants.AMOUNT_CHECKOUT_PAGSEGURO);

        addToast('Curso adquirido com sucesso! Boas aulas!', {
          appearance: 'info',
          autoDismiss: true,
        });
        history.goForward();
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado ao solicitar a compra, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleSetNewCourseInStudent, [user]);

  return <div />;
};

export default CourseBuy;
