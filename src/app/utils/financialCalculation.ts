export function taxaEquivalente(taxaJurosAnual: number): number {
  return Math.pow(1 + taxaJurosAnual / 100, 1 / 12) - 1;
}

export function calcularInvestimentoPreFixado(capital: number, taxaJurosAnual: number, valorAporteMensal: number, periodo: number): number {
  const taxaMensal = taxaEquivalente(taxaJurosAnual);
  const montante = capital * Math.pow(1 + taxaMensal, periodo);
  return (
    montante + (valorAporteMensal * (Math.pow(1 + taxaMensal, periodo) - 1)) / taxaMensal
  );
}

export function calcularInvestimentoPosFixado(capital: number, taxaJurosAnual: number, valorAporteMensal: number, periodo: number, porcentagemCdi: number): number {
  const taxaMensal = taxaEquivalente((porcentagemCdi / 100) * taxaJurosAnual);
  const montante = capital * Math.pow(1 + taxaMensal, periodo);
  return (
    montante + (valorAporteMensal * (Math.pow(1 + taxaMensal, periodo) - 1)) / taxaMensal
  );
}

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

export function calcularImposto(periodo: number, juros: number): number {
  const periodoEmDias = periodo * 30;
  const aliquota =
    periodoEmDias < 180
      ? 22.5
      : periodoEmDias < 360
        ? 20
        : periodoEmDias < 720
          ? 17.5
          : 15;
  
  return juros * (aliquota / 100);
}

export function calcularJurosSimples(capital: number, taxaJurosAnual: number, periodo: number): number {
  const juros = capital * (taxaJurosAnual / 100) * periodo;
  const montante = capital + juros;
  return montante;
}

export function calcularAmortizacaoMensal(emprestimo: number, prazoPagamento: number): number {
  return emprestimo / prazoPagamento;
}

export function calcularJurosMensais(saldoDevedor: number, taxaJurosMensal: number): number {
  return saldoDevedor * taxaJurosMensal;
}

export function calcularParcelasFinanciamentoSac(emprestimo: number, taxaJurosAnual: number, prazoPagamento: number) {
  const taxaMensal = taxaEquivalente(taxaJurosAnual);
  const amortizacao = calcularAmortizacaoMensal(emprestimo, prazoPagamento);

  let saldoDevedor = emprestimo;
  const parcelasCalculadas = Array.from({ length: prazoPagamento }, (_, i) => {
    const jurosMensais = calcularJurosMensais(saldoDevedor, taxaMensal);
    const parcela = amortizacao + jurosMensais;
    saldoDevedor -= amortizacao;
    return parcela;
  });

  const totalParcelas = parcelasCalculadas.reduce((acc, parcela) => acc + parcela, 0);

  return { parcelas: parcelasCalculadas, total: totalParcelas.toFixed(2) };
}