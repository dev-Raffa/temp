export interface PreApprovalRequest {
  cpf: string;
  employment_status: string;
  uf: string;
}

export interface PreApprovalResponse {
  released_value: number;
  message: string;
}
