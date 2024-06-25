export default function ResultadoJurosSimples({ capital, resultado }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };
  return (
    <div className="text-center">
      <p>Capital inicial: {formatCurrency(capital)}</p>
      <p>Valor com Juros: {formatCurrency(resultado - capital)}</p>
      <p>Montante total: {formatCurrency(resultado)}</p>
    </div>
  );
}