import { Pie } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ResultadoCdb({ capital, aportes, juros }) {
  const data = {
    labels: ["Capital Inicial", "Aportes Mensais", "Juros"],
    datasets: [
      {
        data: [capital, aportes, juros],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Pie data={data} options={options} />;
}