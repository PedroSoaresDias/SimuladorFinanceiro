export default function ResultadoJurosCompostos({ capital, valorAporteMensal, periodo, resultado }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  const totalInvestido = capital + valorAporteMensal * periodo;
  const totalJuros = resultado - totalInvestido;

  return (
    <div className="text-center">
      <p>Capital inicial: {formatCurrency(capital)}</p>
      <p>Total investido: {formatCurrency(totalInvestido)}</p>
      <p>Total de Juros: {formatCurrency(totalJuros)}</p>
      <p>O montante é: {formatCurrency(resultado)}</p>
    </div>
  );
}