import { useState } from "react";

export default function JurosCompostos() {
    const [capital, setCapital] = useState("");
    const [taxaJurosAnual, setTaxaJurosAnual] = useState("");
    const [valorAporteMensal, setValorAporteMensal] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [resultado, setResultado] = useState("");

    function taxaEquivalente(taxaJurosAnual) {
        const taxaJurosMensal = Math.pow(1 + (taxaJurosAnual / 100), 1 / 12) - 1;
        return taxaJurosMensal;
    }

    function CalcularJurosCompostos() {
        const montante = capital * (1 + taxaEquivalente(taxaJurosAnual)) ** periodo

        const montanteComAportesMensais = montante +  (valorAporteMensal * ((1 + taxaEquivalente(taxaJurosAnual)) ** periodo - 1)) / taxaEquivalente(taxaJurosAnual);

        setResultado(montanteComAportesMensais);
    }

    return (
        <>
            <h2>Calculadora de Juros Compostos</h2>
            <br />
            <input type="number" placeholder="Capital" value={capital} onChange={(e) => setCapital(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="aportes mensais" value={valorAporteMensal} onChange={(e) => setValorAporteMensal(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Taxa de juros (% ao ano)" value={taxaJurosAnual} onChange={(e) => setTaxaJurosAnual(parseFloat(e.target.value))} />
            <br/>
            <input type="number" placeholder="Período (em meses)" value={periodo} onChange={(e) => setPeriodo(parseFloat(e.target.value))} />
            <br />
            <button onClick={CalcularJurosCompostos}>Calcular</button>
            {resultado > 0 && (<p>Capital inicial: {(new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(capital))}</p>)}
            {resultado > 0 && (<p>Total investido: {(new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(capital + valorAporteMensal * periodo))}</p>)}
            {resultado > 0 && (<p>O montante é: {(new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(resultado))}</p>)}
        </>
    )
}