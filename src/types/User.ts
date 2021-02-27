export interface UserResponse {
  conta: {
    descricao: string;
    id: number;
    numero: string;
    saldo: number;
    tipo: 'CB';
  };
  contaCredito: {
    descricao: string;
    id: number;
    numero: string;
    saldo: number;
    tipo: 'CC';
  };
  dataFim: Date;
  dataInicio: Date;
  token: string;
  usuario: User;
}

interface User {
  cpf: string;
  id: number;
  login: string;
  nome: string;
  redefinirSenha: boolean;
  senha: string;
  senhaTemporaria: string;
}
