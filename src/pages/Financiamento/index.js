import { useState } from "react";

export default function Financiamento() {
  const [emprestimo, setEmprestimo] = useState("");
  const [valorParcela, setValorParcela] = useState("");
  const [prazoPagamento, setprazoPagamento] = useState("");
  const [taxaJurosAnual, setTaxaJurosAnual] = useState("");
  const [totalParcelas, setTotalParcelas] = useState("");

  function TaxaEquivalente(taxaJurosAnual) {
    const taxaJurosMensal = Math.pow(1 + taxaJurosAnual / 100, 1 / 12) - 1;

    return taxaJurosMensal;
  }

  function CalcularAmortizacaoMensal() {
    const amortizacao = emprestimo / prazoPagamento;

    return amortizacao;
  }

  function CalcularFinanciamento() {
    let saldoDevedor = emprestimo;
    let parcelasCalculadas = [];

    for (let i = 1; i <= prazoPagamento; i++) {
      const jurosMensais = saldoDevedor * TaxaEquivalente(taxaJurosAnual);
      const parcela = CalcularAmortizacaoMensal() + jurosMensais;

      saldoDevedor -= CalcularAmortizacaoMensal();
      parcelasCalculadas.push(parcela);
    }

    setValorParcela(parcelasCalculadas);

    const somaParcelas = parcelasCalculadas.reduce(
      (acumulador, parcelas) => acumulador + parcelas,
      0
    );

    setTotalParcelas(somaParcelas.toFixed(2));
  }

  return (
    <>
      <section className="sac">
        <div className="container text-dark">
          <h2 className="text-center">Financiamento SAC</h2>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col mb-3">
              <label for="emprestimo" className="form-label">
                Valor do emprestimo
              </label>
              <div className="input-group">
                <span class="input-group-text" id="basic-addon1">
                  R$
                </span>
                <input
                  type="number"
                  id="emprestimo"
                  className="form-control"
                  value={emprestimo}
                  onChange={(e) => setEmprestimo(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col mb-3">
              <label for="juros" className="form-label">
                Taxa de juros
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
              <label for="prazo" className="form-label">
                Prazo de Pagamento
              </label>
              <div className="input-group">
                <input
                  type="number"
                  id="prazo"
                  className="form-control"
                  value={prazoPagamento}
                  onChange={(e) =>
                    setprazoPagamento(parseFloat(e.target.value))
                  }
                />
                <span class="input-group-text" id="basic-addon3">
                  meses
                </span>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <button
              onClick={CalcularFinanciamento}
              className="btn btn-success col-6"
            >
              Calcular
            </button>
            <div className="col-1"></div>
          </div>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col text-center text-dark">
              {valorParcela.length > 0 && (
                <div>
                  <h4>Parcelas:</h4>
                  <ul>
                    {valorParcela.map((parcela, index) => (
                      <li key={index}>
                        Parcela {index + 1}:{" "}
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(parcela)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {totalParcelas > 0 && (
                <p>
                  Total:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalParcelas)}
                </p>
              )}
            </div>
            <div className="col-1"></div>
          </div>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="card aviso">
                <div className="card-body">
                  <p><strong>Aviso:</strong> A simulação do financiamento SAC, foi desenvolvida para calcular esse tipo de financiamento da forma mais precisa possível, é recomendado consultar o gerente do banco ou da instituição financeira de sua confiança para que possa orientar sobre o financiamento.</p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}
