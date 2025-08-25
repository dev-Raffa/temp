export interface ClientRegisterThirdRequest {
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
}

export interface ClientRegisterThirdResponse {
  id_client: string
  name: string
  social_name: any
  cpf: string
  identity_document_number: string
  cellphone: string
  email: string
  birth_date: string
  sex: string
  mother_name: string
  zipcode: string
  city: string
  state: string
  address: string
  number: number
  complement: string
  neighborhood: string
  address_type: number
  identity_document_state: string
  politically_exposed: any
  politically_exposed_position: any
  politically_exposed_relative: any
  politically_exposed_relative_position: any
}
