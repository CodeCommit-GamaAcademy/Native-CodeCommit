export interface Plano {
  descricao: string,
  id: number,
  login: string,
  padrao: boolean,
  tipoMovimento: string,
}

export interface Lancamentos {
  conta: number,
  data: string,
  decricao: string,
  id: number,
  planoConta: Plano,
  tipo: string,
  valor: number,
}

export interface Conta {
  id: number,
  lancamentos: Lancamentos[],
  saldo: number,
}

export interface Contas {
  contaBanco: Conta,
  contaCredito: Conta,
}