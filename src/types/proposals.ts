export interface Contracts {
  id: string;
  contratosElegiveis: Proposal[];
  contratosInelegiveis: IneligibleProposals[];
}

export interface Proposal {
  clienteDadosPessoais: PersonDetails;
  condicoesContratuaisPortabilidade: ContractsPortabilityDetails | null;
  condicoesContratuaisRefinanciamento: ContractsRefinancingDetails | null;
}

export interface PersonDetails {
  numeroBeneficio: string;
  ufBeneficio: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  idade: string;
  beneficioEspecie: string;
  meioPagamento: string;
  banco: string;
  agBanco: string;
  contaCorrente: string;
  endereco: any;
  cep: any;
  bairro: any;
  cidade: string;
  uf: string;
}

export interface ContractsPortabilityDetails {
  antigoSaldoDevedor: number;
  novoSaldoDevedor: number;
  antigoValorParcela: number;
  novoValorParcela: number;
  economiaReducao: number;
  codigoBancoContratoAtual: number
  nomeBancoContratoAtual: string;
  numeroContratoAtual: string;
  bancoAprovado: string;
  antigaTaxaJuros: number;
  novaTaxaJuros: number;
  valorEmprestado: number
  qtdParcelasPagas: number
}

export interface ContractsRefinancingDetails {
  valorTroco: number
  saldoDevedor: number
  saldoDevedorReduzido: number
  valorParcela: number
  codigoBancoContratoAtual: number
  nomeBancoContratoAtual: string
  numeroContratoAtual: string
  bancoAprovado: string
  antigaTaxaJuros: number
  novaTaxaJuros: number
  valorEmprestado: number
  qtdParcelasPagas: number
}

export interface IneligibleProposals {
  banco: string
  contrato: string
  motivo: string
}