import { useState } from "react";

export default function JurosCompostos() {
  const [capital, setCapital] = useState("");
  const [taxaJurosAnual, setTaxaJurosAnual] = useState("");
  const [valorAporteMensal, setValorAporteMensal] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [resultado, setResultado] = useState("");

  function taxaEquivalente(taxaJurosAnual) {
    const taxaJurosMensal = Math.pow(1 + taxaJurosAnual / 100, 1 / 12) - 1;
    return taxaJurosMensal;
  }

  function CalcularJurosCompostos() {
    const montante = capital * (1 + taxaEquivalente(taxaJurosAnual)) ** periodo;

    const montanteComAportesMensais =
      montante +
      (valorAporteMensal *
        ((1 + taxaEquivalente(taxaJurosAnual)) ** periodo - 1)) /
        taxaEquivalente(taxaJurosAnual);

    setResultado(montanteComAportesMensais);
  }

  return (
    <>
      <section className="composto">
        <div className="container">
          <h2 className="text-center text-dark">Calculadora de Juros Compostos</h2>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col mb-3">
              <label for="capital" className="form-label text-dark">
                Capital inicial
              </label>
              <div className="input-group">
                <span class="input-group-text" id="basic-addon1">
                  R$
                </span>
                <input
                  type="number"
                  className="form-control"
                  id="capital"
                  value={capital}
                  onChange={(e) => setCapital(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col mb-3">
              <label for="aporte" className="form-label text-dark">
                Aportes mensais
              </label>
              <div className="input-group">
                <span class="input-group-text" id="basic-addon2">
                  R$
                </span>
                <input
                  type="number"
                  id="aporte"
                  className="form-control"
                  value={valorAporteMensal}
                  onChange={(e) =>
                    setValorAporteMensal(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col mb-3">
              <label for="juros" className="form-label text-dark">
                Taxa de Juros
              </label>
              <div className="input-group">
                <input
                  id="juros"
                  type="number"
                  className="form-control"
                  value={taxaJurosAnual}
                  onChange={(e) =>
                  setTaxaJurosAnual(parseFloat(e.target.value))}
                />
                <span class="input-group-text" id="basic-addon3">
                  % ao ano
                </span>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col mb-3">
              <label for="mes" className="form-label text-dark">
                Período
              </label>
              <div className="input-group">
                <input
                  id="mes"
                  type="number"
                  className="form-control"
                  value={periodo}
                  onChange={(e) => setPeriodo(parseFloat(e.target.value))}
                />
                <span class="input-group-text" id="basic-addon4">
                  meses
                </span>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <br />
          <div className="row">
            <div className="col"></div>
            <button
              onClick={CalcularJurosCompostos}
              className="btn btn-success col-6"
            >
              Calcular
            </button>
            <div className="col"></div>
          </div>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col text-center text-dark">
              {resultado > 0 && (
                <p>
                  Capital inicial:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(capital)}
                </p>
              )}
              {resultado > 0 && (
                <p>
                  Total investido:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(capital + valorAporteMensal * periodo)}
                </p>
              )}
              {resultado > 0 && (
                <p>
                  O montante é:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(resultado)}
                </p>
              )}
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}
