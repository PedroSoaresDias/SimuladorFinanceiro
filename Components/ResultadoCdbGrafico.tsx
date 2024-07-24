import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);

interface ResultadoCdbGraficoProps {
  totalInvestido: number;
  juros: number;
  imposto: number;
}

const ResultadoCdbGrafico: React.FC<ResultadoCdbGraficoProps> = ({ totalInvestido, juros, imposto }) => {
  const data = {
    labels: ["Total Investido", "Juros", "Imposto"],
    datasets: [
      {
        data: [totalInvestido, juros, imposto],
        backgroundColor: ['#2573CC', '#16B310', "#C25208"],
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

export default ResultadoCdbGrafico;