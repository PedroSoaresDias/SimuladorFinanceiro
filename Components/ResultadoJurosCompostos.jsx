export default function ResultadoJurosCompostos({ capital, resultado }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };
  return (
    <div className="text-center">
      <p>Capital inicial: {formatCurrency(capital)}</p>
      <p>O montante é: {formatCurrency(resultado)}</p>
    </div>
  );
}