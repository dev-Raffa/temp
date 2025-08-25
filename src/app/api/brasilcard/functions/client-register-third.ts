import {
  ClientRegisterThirdRequest,
  ClientRegisterThirdResponse
} from "../types/client-register-third";


export async function clientRegisterThirdBrasilcard(
  data: ClientRegisterThirdRequest,
  token: string
): Promise<ClientRegisterThirdResponse> {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/visa/client-register-third`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    const result = (await response.json()) as ClientRegisterThirdResponse;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
