import { useState } from "react";

export default function JurosSimples() {
    const [capital, setCapital] = useState();
    const [taxa, setTaxa] = useState();
    const [periodo, setPeriodo] = useState();
    const [resultado, setResultado] = useState();

    function CalcularJurosSimples() {
        const juros = capital * (taxa / 100) * periodo;
        const montante = capital + juros;
        setResultado(montante);
    }

    return (
        <>
            <h1>Calculadora de Juros Simples</h1>
            <input type="number" placeholder="Capital inicial" value={capital} onChange={(e) => setCapital(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Taxa em (%)" value={taxa} onChange={(e) => setTaxa(parseFloat(e.target.value))} />
            <br />
            <input type="number" placeholder="Periodo (em anos)" value={periodo} onChange={(e) => setPeriodo(parseFloat(e.target.value))} />
            <br />
            <button onClick={CalcularJurosSimples}>Calcular</button>
            {resultado > 0 && (<p>Capital inicial: {(new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(capital))}</p>)}
            {resultado > 0 && (<p>Valor com juros: {(new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(resultado - capital))}</p>)}
            {resultado > 0 && (<p>Montante total: {(new Intl.NumberFormat("pt-BR", {style: 'currency', currency: "BRL"}).format(resultado))}</p>)}
        </>
    )
}