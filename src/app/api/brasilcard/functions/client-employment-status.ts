export async function clientEmploymentStatusBrasilcard(
  token: string,
  document?: string,
) {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/employment-status`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
