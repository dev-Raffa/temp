export async function clientAddressStatesDataBrasilcard() {
  const url = `${process.env.NEXT_PUBLIC_BRASIL_CARD_URL}/state`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
