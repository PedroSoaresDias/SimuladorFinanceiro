import { useState } from "react";

export default function JurosSimples() {
  const [capital, setCapital] = useState();
  const [taxaJurosAnual, setTaxaJurosAnual] = useState();
  const [periodo, setPeriodo] = useState();
  const [resultado, setResultado] = useState();

  function CalcularJurosSimples() {
    const juros = capital * (taxaJurosAnual / 100) * periodo;
    const montante = capital + juros;
    setResultado(montante);
  }

  return (
    <>
      <section className="simples">
        <div className="container text-dark">
          <h2 className="text-center">Calculadora de Juros Simples</h2>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col mb-3">
              <label for="capital" className="form-label">
                Capital inicial
              </label>
              <div className="input-group">
                <span class="input-group-text" id="basic-addon1">
                  R$
                </span>
                <input
                  type="number"
                  id="capital"
									className="form-control"
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
              <label for="juros" className="form-label">
                Taxa de Juros
              </label>
              <div className="input-group">
                <input
                  type="number"
                  id="juros"
									className="form-control"
                  value={taxaJurosAnual}
                  onChange={(e) =>
                    setTaxaJurosAnual(parseFloat(e.target.value))
                  }
                />
                <span class="input-group-text" id="basic-addon2">
                  % ao ano
                </span>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col mb-3">
              <label for="ano" className="form-label">
                Período
              </label>
              <div className="input-group">
                <input
                  type="number"
                  id="ano"
									className="form-control"
                  value={periodo}
                  onChange={(e) => setPeriodo(parseFloat(e.target.value))}
                />
                <span class="input-group-text" id="basic-addon3">
                  anos
                </span>
              </div>
            </div>
            <div className="col-1"></div>
					</div>
					<br />
          <div className="row">
            <div className="col"></div>
            <button
              onClick={CalcularJurosSimples}
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
                  Valor com juros:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(resultado - capital)}
                </p>
              )}
              {resultado > 0 && (
                <p>
                  Montante total:{" "}
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
