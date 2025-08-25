import type {
  ClientAnalyseRequest,
  ClientAnalyseResponse
} from "../types/customer-analyse.ts";

export async function clientAnalyseBrasilcard(
  data: ClientAnalyseRequest,
  token: string
): Promise<ClientAnalyseResponse> {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/visa/client-analyse`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    const result = (await response.json()) as ClientAnalyseResponse;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
