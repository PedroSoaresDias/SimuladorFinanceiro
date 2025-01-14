import React from "react";
import { formatCurrency } from "../src/app/utils/financialCalculation";

function ResultadoJurosSimples({ capital, resultado }) {
  return (
    <div className="text-center">
      <p>Capital inicial: {formatCurrency(capital)}</p>
      <p>Valor com Juros: {formatCurrency(resultado - capital)}</p>
      <p>Montante total: {formatCurrency(resultado)}</p>
    </div>
  );
}

export default React.memo(ResultadoJurosSimples);