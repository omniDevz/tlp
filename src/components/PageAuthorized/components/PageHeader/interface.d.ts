export interface HeaderProps {
  type?: 'icon' | 'back';
  text?: string;
}

export interface IRoute {
  route: string;
  title: string;
  text: string;
}

export interface ITransmissionNotificationApi {
  notificacaoTransmissaoId: number;
  descricao: string;
  link: string;
}
