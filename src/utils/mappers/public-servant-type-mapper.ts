import {
  ArmedForcesPublicServant,
  FederalServantLink,
  MunicipalPublicServantLink,
  PublicServantType,
  StatePublicServantLink
} from "@/types/customer";

export const publicServantTypeMap: Record<string, PublicServantType> = {
  Federal: PublicServantType.Federal,
  State: PublicServantType.State,
  Municipal: PublicServantType.Municipal,
  ArmedForces: PublicServantType.ArmedForces,
};

export const federalServantLinkMap: Record<string, FederalServantLink> = {
  CivilServant: FederalServantLink.CivilServant,
  PermanentActive: FederalServantLink.PermanentActive,
  RetiredOrPensioner: FederalServantLink.RetiredOrPensioner,
  CltCeletista: FederalServantLink.CltCeletista,
  CommissionedPosition: FederalServantLink.CommissionedPosition,
  TemporaryPosition: FederalServantLink.TemporaryPosition,
  Other: FederalServantLink.Other,
};

export const municipalServantLinkMap: Record<string, MunicipalPublicServantLink> = {
  PermanentEmployee: MunicipalPublicServantLink.PermanentEmployee,
  PermanentActive: MunicipalPublicServantLink.PermanentActive,
  RetiredOrPensioner: MunicipalPublicServantLink.RetiredOrPensioner,
  CLTEmployee: MunicipalPublicServantLink.CLTEmployee,
  CommissionedPosition: MunicipalPublicServantLink.CommissionedPosition,
  TemporaryPosition: MunicipalPublicServantLink.TemporaryPosition,
  Other: MunicipalPublicServantLink.Other,
};

export const stateServantLinkMap: Record<string, StatePublicServantLink> = {
  MilitaryPoliceOfSaoPaulo: StatePublicServantLink.MilitaryPoliceOfSaoPaulo,
  FinanceAndPlanningSecretary: StatePublicServantLink.FinanceAndPlanningSecretary,
  RetiredEmployees: StatePublicServantLink.RetiredEmployees,
  HospitalClinicsFMUSP: StatePublicServantLink.HospitalClinicsFMUSP,
  HospitalClinicsFMRP: StatePublicServantLink.HospitalClinicsFMRP,
  MedicalAssistanceInstituteSP: StatePublicServantLink.MedicalAssistanceInstituteSP,
  Others: StatePublicServantLink.Others,
};

export const armedForcesLinkMap: Record<string, ArmedForcesPublicServant> = {
  ActiveMilitary: ArmedForcesPublicServant.ActiveMilitary,
  RetiredReserve: ArmedForcesPublicServant.RetiredReserve,
  Retired: ArmedForcesPublicServant.Retired,
  Pensioners: ArmedForcesPublicServant.Pensioners,
  Others: ArmedForcesPublicServant.Others,
};
