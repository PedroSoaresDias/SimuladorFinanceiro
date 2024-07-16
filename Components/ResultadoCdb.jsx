import { calcularImposto, formatCurrency } from "@/app/utils/financialCalculation";

export default function ResultadoCdb({ capital, valorAporteMensal, periodo, resultado }) {
  const totalInvestido = capital + valorAporteMensal * periodo;
  const totalJuros = resultado - totalInvestido;
  const valorImposto = calcularImposto(periodo, totalJuros);
  const rendimentoLiquido = resultado - valorImposto;

  return (
    <div className="text-center">
      <p>Rendimento Bruto: {formatCurrency(resultado)}</p>
      <p>Capital inicial: {formatCurrency(capital)}</p>
      <p>Total investido: {formatCurrency(totalInvestido)}</p>
      <p>Rendimento sobre os Juros: {formatCurrency(totalJuros)}</p>
      <p>Imposto sobre o Rendimento: {formatCurrency(valorImposto)}</p>
      <p>Rendimento Líquido: {formatCurrency(rendimentoLiquido)}</p>
    </div>
  );
}