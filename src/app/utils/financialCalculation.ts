export function taxaEquivalente(taxaJurosAnual: number) {
  return Math.pow(1 + taxaJurosAnual / 100, 1 / 12) - 1;
}

export function calcularInvestimentoPreFixado(capital: number, taxaJurosAnual: number, valorAporteMensal: number, periodo: number) {
  const taxaMensal = taxaEquivalente(taxaJurosAnual);

  const montante = capital * (1 + taxaMensal) ** periodo;

  const montanteComAportesMensais = montante + (valorAporteMensal * ((1 + taxaMensal) ** periodo - 1)) / taxaMensal;

  return montanteComAportesMensais;
}

export function calcularInvestimentoPosFixado(capital: number, taxaJurosAnual: number, valorAporteMensal: number, periodo: number, porcentagemCdi: number) {
  const resultadoPorcentagemCdi = (porcentagemCdi / 100) * taxaJurosAnual;

  const taxaMensal = taxaEquivalente(resultadoPorcentagemCdi);

  const montante = capital * (1 + taxaMensal) ** periodo;

  const montanteComAportesMensais = montante + (valorAporteMensal * ((1 + taxaMensal) ** periodo - 1)) / taxaMensal;

  return montanteComAportesMensais;
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

export function calcularImposto(periodo: number, juros: number) {
  const periodoEmDias = periodo * 30;

  if (periodoEmDias < 180) {
    return juros * (22.50 / 100);
  } else if (periodoEmDias >= 180 && periodoEmDias < 360) {
    return juros * (20 / 100);
  } else if (periodoEmDias >= 360 && periodoEmDias < 720) {
    return juros * (17.50 / 100);
  } else {
    return juros * (15 / 100);
  }
}

export function calcularJurosSimples(capital: number, taxaJurosAnual: number, periodo: number) {
  const juros = capital * (taxaJurosAnual / 100) * periodo;
  const montante = capital + juros;
  return montante;
}

export function calcularAmortizacaoMensal(emprestimo: number, prazoPagamento: number) {
  return emprestimo / prazoPagamento;
}

export function calcularFinanciamento(emprestimo: number, taxaJurosAnual: number, prazoPagamento: number) {
  const taxaMensal = taxaEquivalente(taxaJurosAnual);
  let saldoDevedor = emprestimo;
  let parcelasCalculadas = [];
  const amortizacao = calcularAmortizacaoMensal(emprestimo, prazoPagamento);

  for (let i = 1; i <= prazoPagamento; i++) {
    const jurosMensais = saldoDevedor * taxaMensal;
    const parcela = amortizacao + jurosMensais;
    saldoDevedor -= amortizacao;
    parcelasCalculadas.push(parcela as never);
  }

  const somaParcelas = parcelasCalculadas.reduce(
    (acumulador, parcelas) => acumulador + parcelas,
    0
  );

  return { parcelas: parcelasCalculadas, total: somaParcelas.toFixed(2) };
}