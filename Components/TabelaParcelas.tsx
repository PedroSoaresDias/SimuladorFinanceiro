import React from "react";
import { formatCurrency } from "../src/app/utils/financialCalculation";

interface TabelaParcelasProps {
  parcelas: number[];
  total: number;
}

const TabelaParcelas: React.FC<TabelaParcelasProps> = ({ parcelas, total }) => (
  <div className="text-center text-dark">
    <h4>Parcelas:</h4>
    <div className="table-responsive my-3">
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Nº de parcelas</th>
            <th>Valor da parcela</th>
          </tr>
        </thead>
        <tbody>
          {parcelas.map((parcela, index) => (
            <tr key={index}>
              <td>{index + 1}ª Parcela</td>
              <td>{formatCurrency(parcela)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2} >Valor total: {formatCurrency(total)}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
);

export default React.memo(TabelaParcelas);