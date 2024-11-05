import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

const Chart3 = ({ height = 200 }) => {
	const data = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: "Sales",
				data: [120, 190, 300, 500, 200, 300],
				backgroundColor: "rgba(175, 12, 192, 0.2)",
				borderColor: "rgba(175, 12, 192, 1)",
				borderWidth: 1,
			},
		],
	};

	const options = { responsive: true };

	return <Bar data={data} options={options} height={height} />;
};

export default Chart3;
