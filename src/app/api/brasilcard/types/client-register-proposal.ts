export interface ClientRegisterProposalRequest {
  name: string
  cpf: string
  identity_document_number: string
  identity_document_state: string
  cellphone: string
  ddd: string
  email: string
  birth_date: string
  sex: string
  marital_status: string
  mother_name: string
  job: string
  job_company: string
  employment_status: string
  income: number
  zipcode: string
  city: string
  state: string
  type_street: string
  address: string
  number: string
  complement: string
  neighborhood: string
  politically_exposed_position: boolean
  politically_exposed_position_date: string
  politically_exposed_relative: boolean
  id_user: string
  id_relative: string
  id_client: string
}

export interface ClientRegisterProposalResponse {
  message: string
  success: boolean
  data: string
}
