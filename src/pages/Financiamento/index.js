import { useState } from "react";

export default function Financiamento() {
    const [emprestimo, setEmprestimo] = useState("");
    const [valorParcela, setValorParcela] = useState("");
    const [prazoPagamento, setPrazoPagamento] = useState("");
    const [taxaJurosAnual, setTaxaJurosAnual] = useState("");

    function TaxaEquivalente(taxaJurosAnual) {
        const taxaJurosMensal = Math.pow(1 + (taxaJurosAnual / 100), 1 / 12) - 1;

        return taxaJurosMensal;
    }

    function CalcularAmortizacaoMensal() {
        const amortizacao = emprestimo / prazoPagamento;

        return amortizacao;
    }

    function CalcularJurosMensais() {
        const jurosMensais = emprestimo * TaxaEquivalente(taxaJurosAnual);

        return jurosMensais;
    }

    function CalcularSaldoDevedor() {
        const saldoDevedor = emprestimo - CalcularAmortizacaoMensal();

        return saldoDevedor;
    }

    function CalcularJurosProximoMes() {
        const proximoMes = CalcularSaldoDevedor() * CalcularAmortizacaoMensal();

        return proximoMes;
    }

    function CalcularParcelaMensal() {
        // const jurosDecimal = taxaJurosAnual / 100;

        const parcela = CalcularAmortizacaoMensal() + CalcularJurosMensais();
        // setValorParcela(parcela)
        return parcela;
    }

    return (
        <>
            <h2>Financiamento SAC</h2>
            <br />
            <input type="number" placeholder="Valor do emprestimo" value={emprestimo} onChange={(e) => setEmprestimo(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Taxa de juros ao ano" value={taxaJurosAnual} onChange={(e) => setTaxaJurosAnual(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Prazo de pagamento" value={prazoPagamento} onChange={(e) => setPrazoPagamento(parseFloat(e.target.value))} />
            <br />
            <button onClick={CalcularFinanciamento}>Calcular</button>
            {valorParcela > 0 && (<p>Valor da parcela é: {(new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(valorParcela))}</p>)}
            {valorParcela > 0 && (<p>Valor total é: {(new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(valorParcela * prazoPagamento))}</p>)}
        </>
    )
}