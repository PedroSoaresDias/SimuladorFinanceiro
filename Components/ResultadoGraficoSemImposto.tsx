import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);

interface ResultadoGraficoProps {
  totalInvestido: number;
  juros: number;
}

const ResultadoGraficoSemImposto: React.FC<ResultadoGraficoProps>  = ({ totalInvestido, juros }) => {
  const data = {
    labels: ["Total Investido", "Juros"],
    datasets: [
      {
        data: [totalInvestido, juros],
        backgroundColor: ['#2573CC', '#16B310'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default React.memo(ResultadoGraficoSemImposto);