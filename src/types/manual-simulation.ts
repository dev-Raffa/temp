export interface ManualSimulationData {
  personData: ClienteDadosPessoaisResponse
  refinancing?: RefinanciamentoResponse
  carding?: SimulacaoCartaoResponse
  loan?: SimulacaoEmprestimoResponse
}

export type SimulationType = 'refinancing' | 'carding' | 'loan';

export interface ClienteDadosPessoaisResponse {
  id: string
  customerOrigin: CustomerOrigin
  assignedOperator: AssignedOperator
  contractDetails: ContractDetails
  phoneNumber1: string
  phoneNumber2: string
  cpf: string
  name: string
  bank: string
  amountContractsElegible: number
  city: string
  uf: string
  dateBirth: string
}

export interface CustomerOrigin {
  creationOrigin: string
  creationDate: string
  marketingDetails: MarketingDetails
}

export interface MarketingDetails {
  utmSource: string
  utmCampaign: string
  utmId: string
  utmContent: string
}

export interface AssignedOperator {
  id: string
  name: string
  username: string
  phonenumber: string
  teamDetails: any
  isActiveToday: boolean
}

export interface ContractDetails {
  functionalStatus: string
  currentRate: number
  currentInstallment: number
  remainingTerm: number
  institution: string
  affiliation: string
  earnings: string
  cardMargin: number
  loanMargin: number
}

export interface RefinanciamentoResponse {
  limiteOriginal: number
  novoLimite: number
  liberacaoAtual: number
  novaLiberacao: number
  faturaAtual: number
  novaFatura: number
  jurosAtual: number
  novoJuros: number
  dividaAtual: number
  novaDivida: number
}

export interface SimulacaoCartaoResponse {
  novoLimiteDisponivel: number
  valorSaqueLiberado: number
  margemAtual: number
}

export interface SimulacaoEmprestimoResponse {
  valorLiberado: number
}