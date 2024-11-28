import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ShareholdingChart = ({ data }) => {
  const labels = data[0]?.categories.map((entry) => entry.holdingDate) || [];
  const datasets = data.map((category) => ({
    label: category.categoryName,
    data: category.categories.map((entry) => parseFloat(entry.percentage)),
    fill: true,
    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.2)`,
    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`,
    tension: 0.3,
  }));

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#333",
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage",
          color: "#333",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-0 bg-white shadow-md rounded-lg">
      <h2 className="text-xl p-2 font-semibold text-gray-800 mb-4">
        Shareholding Pattern
      </h2>
      <div className="max-w-full h-96">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ShareholdingChart;
