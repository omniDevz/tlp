export interface ILivePage {
  transmissionNotificationId: string;
}

export interface ITransmissionNotificationApi {
  notificacaoTransmissaoId: number;
  descricao: string;
  link: string;
  inativo: boolean;
  ultimoUsuarioAlteracao?: number;
}

export interface ITransmissionNotification {
  TransmissionNotificationId: number;
  description: string;
  link: string;
}
