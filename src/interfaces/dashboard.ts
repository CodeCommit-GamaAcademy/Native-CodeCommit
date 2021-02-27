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
  id: number,
  plano: Plano,
  tipo: string,
  valor: number,
}

export interface Conta {
  id: number,
  lancamentos: Lancamentos[],
  saldo: number,
}