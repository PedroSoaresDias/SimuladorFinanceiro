const DATA_ATUAL = new Date();
const DATA_ANTERIOR = new Date(DATA_ATUAL);

DATA_ANTERIOR.setDate(DATA_ATUAL.getDate() - 1);

export async function getTaxaSelic() {
    try {
        const response = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados?formato=json&dataInicial=${DATA_ANTERIOR}&dataFinal=${DATA_ATUAL}`, { next: { revalidate: 10800 } });
    
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados da API")
        }

        return response.json();
    } catch (error) {
        console.error("Erro na requisição: ", error.message);
        return null;
    }

}