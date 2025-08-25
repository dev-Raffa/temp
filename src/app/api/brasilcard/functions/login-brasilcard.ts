import type {
  BrasilcardLoginRequest,
  BrasilcardLoginResponse
} from "../types/login.ts";


export async function loginBrasilcard(
  data: BrasilcardLoginRequest
): Promise<BrasilcardLoginResponse> {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/shopkeeper/login`;

  try {
    console.log(data)
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição de login da Brasilcard: ${response.statusText}`);
    }

    const result = (await response.json()) as BrasilcardLoginResponse;
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
