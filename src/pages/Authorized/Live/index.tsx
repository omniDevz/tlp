import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import PageAuthorized from '../../../components/PageAuthorized';

import api from '../../../services/api';

import { Stream, Description, Frame } from './styled';

import {
  ITransmissionNotificationApi,
  ITransmissionNotification,
  ILivePage,
} from './interface';

const Live: React.FC<ILivePage> = () => {
  const [live, setLive] = useState<ITransmissionNotification>(
    {} as ITransmissionNotification
  );

  const { transmissionNotificationId } = useParams() as ILivePage;
  const { addToast } = useToasts();

  function handleGetLive() {
    api
      .get(`notificacaoTransmissao/${transmissionNotificationId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const liveApi = response.data as ITransmissionNotificationApi;

        setLive({
          description: liveApi.descricao,
          TransmissionNotificationId: liveApi.notificacaoTransmissaoId,
          link: liveApi.link,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por live, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetLive, []);

  return (
    <PageAuthorized type="back" text="Ao vivo">
      <Stream>
        <Description>{live.description}</Description>
        <Frame src={live.link} />
      </Stream>
    </PageAuthorized>
  );
};

export default Live;
