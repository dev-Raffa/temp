export interface CreateCustomerRequest {
  customerOrigin: CustomerOrigin
  segment?: Segment
  marketingDetails: MarketingDetails
  assignedOperatorRequest?: AssignedOperatorRequest
  name: string
  phonenumber: string
  cpf: string
  amountContractsElegible: number
}

export interface CreatePublicServerCustomerRequest {
  customerOrigin: CustomerOrigin
  segment?: Segment
  marketingDetails: MarketingDetails
  assignedOperatorRequest?: AssignedOperatorRequest
  publicServantDetails?: PublicServantDetails
  name: string
  phonenumber: string
  cpf?: string
  amountContractsElegible: number
}

export enum CustomerOrigin {
  None,
  FileImportation,
  Api,
  LeadImportation
}

export enum Segment {
  PublicServant,
  Benificiary,
}

export interface MarketingDetails {
  utmSource: string
  utmCampaign: string
  utmId: string
  utmContent: string
}

export interface AssignedOperatorRequest {
  id: string
  name: string
  username: string
  phonenumber: string
  teamDetails: Team
  isActiveToday?: boolean
}

export interface Team {
  teamId: string
  teamName: string
}

export interface PublicServantDetails {
  publicServantType: PublicServantType
  federalServantLink: FederalServantLink
  statePublicServantLink: StatePublicServantLink
  municipalPublicServantLink: MunicipalPublicServantLink
  armedForcesPublicServant: ArmedForcesPublicServant
}

export enum ArmedForcesPublicServant {
  None = 0,
  ActiveMilitary = 1,
  RetiredReserve = 2,
  Retired = 3,
  Pensioners = 4,
  Others = 5
}

export enum FederalServantLink {
  None = 0,
  CivilServant = 1,
  PermanentActive = 2,
  RetiredOrPensioner = 3,
  CltCeletista = 4,
  CommissionedPosition = 5,
  TemporaryPosition = 6,
  Other = 7
}

export enum MunicipalPublicServantLink {
  None = 0,
  PermanentEmployee = 1,
  PermanentActive = 2,
  RetiredOrPensioner = 3,
  CLTEmployee = 4,
  CommissionedPosition = 5,
  TemporaryPosition = 6,
  Other = 7
}

export enum PublicServantType {
  None = 0,
  Federal = 1,
  State = 2,
  Municipal = 3,
  ArmedForces = 4
}

export enum StatePublicServantLink {
  None = 0,
  MilitaryPoliceOfSaoPaulo = 1,
  FinanceAndPlanningSecretary = 2,
  RetiredEmployees = 3,
  HospitalClinicsFMUSP = 4,
  HospitalClinicsFMRP = 5,
  MedicalAssistanceInstituteSP = 6,
  Others = 7
}