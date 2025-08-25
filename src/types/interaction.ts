export interface InteractionResponse {
  id: string
  operator: Operator
  customer: Customer
  leadStatus: string
}

export interface Operator {
  id: string
  name: string
  username: string
  phonenumber: string
  teamDetails: Team,
  isActiveToday: boolean
}

export interface Team {
  teamId: string
  teamName: string
}

export interface Customer {
  name: string
  cpf: string
  phoneNumber: string
}
