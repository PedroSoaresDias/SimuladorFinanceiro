import { Pie } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ResultadoCdb({ totalInvestido, juros }) {
  const data = {
    labels: ["Total Investido", "Juros"],
    datasets: [
      {
        data: [totalInvestido, juros],
        backgroundColor: ['#36A2EB', '#FF6384'],
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