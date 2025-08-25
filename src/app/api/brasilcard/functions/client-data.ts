export async function clientDataBrasilcard(
  document: string,
  token: string
) {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URLL}/personal-loan-shopkeeper/customer?cpf=${document}`;

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
