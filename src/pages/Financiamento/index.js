import { useState } from "react";

export default function Financiamento() {
    const [emprestimo, setEmprestimo] = useState("");
    const [valorParcela, setValorParcela] = useState("");
    const [prazoPagamento, setprazoPagamento] = useState("");
    const [taxaJurosAnual, setTaxaJurosAnual] = useState("");
    const [totalParcelas, setTotalParcelas] = useState("");

    function TaxaEquivalente(taxaJurosAnual) {
        const taxaJurosMensal = Math.pow(1 + (taxaJurosAnual / 100), 1 / 12) - 1;

        return taxaJurosMensal;
    }

    function CalcularAmortizacaoMensal() {
        const amortizacao = emprestimo / prazoPagamento;

        return amortizacao;
    }

    function CalcularFinanciamento() {
        let saldoDevedor = emprestimo;
        let parcelasCalculadas = [];

        for (let i = 1; i <= prazoPagamento; i++){
            const jurosMensais = saldoDevedor * TaxaEquivalente(taxaJurosAnual);
            const parcela = CalcularAmortizacaoMensal() + jurosMensais;

            saldoDevedor -= CalcularAmortizacaoMensal();
            parcelasCalculadas.push(parcela);
        }

        setValorParcela(parcelasCalculadas)

        const somaParcelas = parcelasCalculadas.reduce((acumulador, parcelas) => acumulador + parcelas, 0);
        
        setTotalParcelas(somaParcelas.toFixed(2));
    }

    return (
        <>
            <h2>Financiamento SAC</h2>
            <br />
            <input type="number" placeholder="Valor do emprestimo" value={emprestimo} onChange={(e) => setEmprestimo(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Taxa de juros ao ano" value={taxaJurosAnual} onChange={(e) => setTaxaJurosAnual(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Prazo de pagamento" value={prazoPagamento} onChange={(e) => setprazoPagamento(parseFloat(e.target.value))} />
            <br />
            <button onClick={CalcularFinanciamento}>Calcular</button>
            {valorParcela.length > 0 && (
                <div>
                    <h4>Parcelas:</h4>
                    <ul>
                        {valorParcela.map((parcela, index) => (
                            <li key={index}>
                                Parcela {index + 1}: {new Intl.NumberFormat("pt-BR",{style: "currency", currency: "BRL"}).format(parcela)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {totalParcelas > 0 && (<p>Total: {new Intl.NumberFormat("pt-BR", {style:"currency", currency:"BRL"}).format(totalParcelas)}</p>)}
        </>
    )
}