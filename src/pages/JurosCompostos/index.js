import { useState } from "react";

export default function JurosCompostos() {
    const [capital, setCapital] = useState("");
    const [taxaJurosAnual, setTaxaJurosAnual] = useState("");
    const [valorAporteMensal, setValorAporteMensal] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [resultado, setResultado] = useState("");

    function CalcularJurosCompostos() {
        const taxaJurosMensal = taxaJurosAnual / 100 / 12;

        const juros = capital * ((1 + taxaJurosMensal) ** periodo - 1) + (valorAporteMensal * ((1 + taxaJurosMensal) ** periodo - 1) / taxaJurosMensal);

        const montante = capital + juros;
        setResultado(montante);
    }

    return (
        <>
            <h1>Calculadora de Juros Compostos</h1>
            <input type="number" placeholder="Capital" value={capital} onChange={(e) => setCapital(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="aportes mensais" value={valorAporteMensal} onChange={(e) => setValorAporteMensal(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Taxa de juros (% ao ano)" value={taxaJurosAnual} onChange={(e) => setTaxaJurosAnual(parseFloat(e.target.value))} />
            <br/>
            <input type="number" placeholder="Período (em meses)" value={periodo} onChange={(e) => setPeriodo(parseFloat(e.target.value))} />
            <br />
            <button onClick={CalcularJurosCompostos}>Calcular</button>
            {resultado > 0 && (<p>Capital inicial: R$ {capital.toFixed(2)}</p>)}
            {resultado > 0 && (<p>Total investido: R$ {(capital + valorAporteMensal * periodo).toFixed(2)}</p>)}
            {resultado > 0 && (<p>O montante é: R$ {resultado.toFixed(2)}</p>)}
        </>
    )
}