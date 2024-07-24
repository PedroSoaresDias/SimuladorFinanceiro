export async function getTaxaSelic() {
  try {
    const response = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados/ultimos/1?formato=json`, { next: { revalidate: 3600 } });

    if (!response.ok) {
      throw new Error("Erro ao buscar os dados da API");
    }

    const data = await response.json();
    return data.length ? data[data.length - 1] : null;
  } catch (error) {
    console.error("Erro na requisição: ", error.message);
    return null;
  }
}