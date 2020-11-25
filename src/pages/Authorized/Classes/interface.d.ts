export interface ClassProps {
  classId?: string;
  name: string;
  students?: number;
  description: string;
  code?: string;
}

export interface ClassApiProps {
  turmaId: string;
  nome: string;
  descricao: string;
  codigo: string;
  quantidadeAlunos: number;
  alunos: IStudent[];
}
