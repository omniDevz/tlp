import api from './api';
import { IResponse, PhoneProps, UserProps, AddressProps } from './interface';

export async function signIn(
  username: string,
  password: string
): Promise<UserProps> {
  const response: IResponse = await api.post('/aluno/validarLoginAluno', {
    usuario: username,
    senha: password,
  });

  if (response.status !== 200) {
    return {
      status: response.status,
    } as UserProps;
  }

  const { pessoa } = response.data.usuario;
  const { telefone, endereco } = pessoa;

  const user: UserProps = {
    studentId: response.data.usuario.alunoId,
    personId: pessoa.pessoaId,
    firstName: pessoa.nome,
    lastName: pessoa.sobrenome,
    cpf: pessoa.cpf,
    dateOfBirth: pessoa.dataNascimento,
    genre: pessoa.sexo,
    email: pessoa.email,
    number: pessoa.numero,
    username: pessoa.usuario,
    phone: (!!telefone
      ? {
          phoneId: telefone.telefoneId,
          countryCode: telefone.CodigoDiscagem,
          ddd: telefone.NumeroTelefone,
          number: telefone.NumeroTelefone,
          typeFone: telefone.TipoTelefone,
        }
      : {}) as PhoneProps,
    address: (!!endereco
      ? {
          addressId: endereco.enderecoId,
          cep: endereco.Cep,
          address: endereco.Logradouro,
          neighborhood: endereco.Bairro,
          city: endereco.Cidade,
          state: endereco.Estado,
          country: endereco.Pais,
        }
      : {}) as AddressProps,
    token: response.data.token,
    dateExpires: response.data.dataExpiracao,
    status: response.status,
    premium: response.data.usuario.eAssinante,
    observations: response.data.usuario.observacao,
  };

  return user;
}
