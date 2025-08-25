export async function clientAddressDataBrasilcard(
  token: string,
  document?: string,
) {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/address-type`;

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
