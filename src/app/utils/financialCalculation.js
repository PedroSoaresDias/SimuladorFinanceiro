export function taxaEquivalente(taxaJurosAnual) {
  return Math.pow(1 + taxaJurosAnual / 100, 1 / 12) - 1;
}

export function calcularJurosCompostos(capital, taxaJurosAnual, valorAporteMensal, periodo) {
  const taxaMensal = taxaEquivalente(taxaJurosAnual);

  const montante = capital * (1 + taxaMensal) ** periodo;

  const montanteComAportesMensais = montante + (valorAporteMensal * ((1 + taxaMensal) ** periodo - 1)) / taxaMensal;

  return montanteComAportesMensais;
}

export function calcularCdb(capital, taxaJurosAnual, valorAporteMensal, periodo) {
  const taxaMensal = taxaEquivalente(taxaJurosAnual);

  const montante = capital * (1 + taxaMensal) ** periodo;

  const montanteComAportesMensais = montante + (valorAporteMensal * ((1 + taxaMensal) ** periodo - 1)) / taxaMensal;

  return montanteComAportesMensais;
}

export function calcularCdbPosFixado(capital, taxaJurosAnual, valorAporteMensal, periodo, porcentagemCdi) {
  const resultadoPorcentagemCdi = (porcentagemCdi / 100) * taxaJurosAnual;

  const taxaMensal = taxaEquivalente(resultadoPorcentagemCdi);

  const montante = capital * (1 + taxaMensal) ** periodo;

  const montanteComAportesMensais = montante + (valorAporteMensal * ((1 + taxaMensal) ** periodo - 1)) / taxaMensal;

  return montanteComAportesMensais;
}

export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
};

export function calcularJurosSimples(capital, taxaJurosAnual, periodo) {
  const juros = capital * (taxaJurosAnual / 100) * periodo;
  const montante = capital + juros;
  return montante;
}

export function calcularAmortizacaoMensal(emprestimo, prazoPagamento) {
  return emprestimo / prazoPagamento;
}

export function calcularFinanciamento(emprestimo, taxaJurosAnual, prazoPagamento) {
  const taxaMensal = taxaEquivalente(taxaJurosAnual);
  let saldoDevedor = emprestimo;
  let parcelasCalculadas = [];
  const amortizacao = calcularAmortizacaoMensal(emprestimo, prazoPagamento);

  for (let i = 1; i <= prazoPagamento; i++) {
    const jurosMensais = saldoDevedor * taxaMensal;
    const parcela = amortizacao + jurosMensais;
    saldoDevedor -= amortizacao;
    parcelasCalculadas.push(parcela);
  }

  const somaParcelas = parcelasCalculadas.reduce(
    (acumulador, parcelas) => acumulador + parcelas,
    0
  );

  return { parcelas: parcelasCalculadas, total: somaParcelas.toFixed(2) };
}