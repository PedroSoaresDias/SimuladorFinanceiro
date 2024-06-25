export function taxaEquivalente(taxaJurosAnual) {
  const taxaJurosMensal = Math.pow(1 + taxaJurosAnual / 100, 1 / 12) - 1;
  return taxaJurosMensal;
}

export function calcularJurosCompostos(capital, taxaJurosAnual, valorAporteMensal, periodo) {
  const taxaMensal = taxaEquivalente(taxaJurosAnual);

  const montante = capital * (1 + taxaMensal) ** periodo;

  const montanteComAportesMensais = montante + (valorAporteMensal * ((1 + taxaMensal) ** periodo - 1)) / taxaMensal;

  return montanteComAportesMensais;
}