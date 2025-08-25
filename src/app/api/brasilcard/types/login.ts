export interface BrasilcardLoginRequest {
  relative: string;
  username: string;
  password: string;
  captcha: string;
}

export interface BrasilcardLoginResponse {
  uac: boolean
  user_id: string
  relative_id: string
  user_name: string
  relative_name: string
  email: string
  access_token: string
  redirect: any
}
