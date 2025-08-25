import type {
  PreApprovalRequest,
  PreApprovalResponse
} from "../types/pre-approval.ts";

export async function preApprovalBrasilcard(
  data: PreApprovalRequest,
  token: string
): Promise<PreApprovalResponse> {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/personal-loan-shopkeeper/proposal/pre-approval`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    const result = (await response.json()) as PreApprovalResponse;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
