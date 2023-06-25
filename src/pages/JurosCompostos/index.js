import { useState } from "react";

export default function JurosCompostos() {
    const [capital, setCapital] = useState();
    const [taxa, setTaxa] = useState();
    const [aportes, setAportes] = useState();
    const [periodo, setPeriodo] = useState();
    const [resultado, setResultado] = useState();

    function CalcularJurosCompostos() {
        const taxaJuros = taxa / 100;
        const jurosMensais = taxaJuros / 12;

        const juros = capital * (Math.pow(1 + jurosMensais, periodo) - 1) + (aportes * (Math.pow(1 + jurosMensais, periodo) - 1) / jurosMensais);

        const montante = capital + juros;
        setResultado(montante);
    }

    return (
        <>
            <h1>Calculadora de Juros Compostos</h1>
            <input type="number" placeholder="Capital" value={capital} onChange={(e) => setCapital(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="aportes mensais" value={aportes} onChange={(e) => setAportes(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Taxa de juros (%)" value={taxa} onChange={(e) => setTaxa(parseFloat(e.target.value))} />
            <br/>
            <input type="number" placeholder="Período (em meses)" value={periodo} onChange={(e) => setPeriodo(parseFloat(e.target.value))} />
            <br />
            <button onClick={CalcularJurosCompostos}>Calcular</button>
            {resultado > 0 && (<p>Capital inicial: R$ {capital.toFixed(2)}</p>)}
            {resultado > 0 && (<p>Total investido: R$ {capital + (aportes * periodo)}</p>)}
            {resultado > 0 && (<p>O montante é: R$ {resultado.toFixed(2)}</p>)}
        </>
    )
}