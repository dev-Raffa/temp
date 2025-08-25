export interface ClientAnalyseRequest {
  cpf: string;
  employment_status: string;
  uf: string;
  birth_date: string;
}

export interface ClientAnalyseResponse {
  pre_approved: boolean;
  card_limit: number;
  status: string;
  message: string;
}
