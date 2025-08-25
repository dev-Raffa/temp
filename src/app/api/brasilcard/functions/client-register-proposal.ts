import {
  ClientRegisterProposalRequest,
  ClientRegisterProposalResponse
} from "../types/client-register-proposal";


export async function clientRegisterProposalBrasilcard(
  data: ClientRegisterProposalRequest,
  token: string
): Promise<ClientRegisterProposalResponse> {
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

    const result = (await response.json()) as ClientRegisterProposalResponse;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
