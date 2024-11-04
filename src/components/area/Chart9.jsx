import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { randomTrBookType } from "../../utils/RandomData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);
const Chart9 = () => {
	const labels = randomTrBookType(8);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "pages",
				data: [60, 45, 120, 330, 90, 30, 100, 310],
				backgroundColor: "rgba(20, 4, 200, .2)",
				borderColor: "rgba(20, 4, 200, 1)",
				borderWidth: 2,
				tension: 0.4,
				fill: true,
			},
			{
				label: "cilt",
				data: [8, 50, 2, 2, 5, 20, 1, 4],
				backgroundColor: "rgba(250, 130, 9, .3)",
				borderColor: "rgba(250, 130, 9, 1)",
				borderWidth: 2,
				tension: 0.4,
				fill: true,
			},
		],
	};

	const options = {
		radius: 3,
		responsive: true,

		plugins: {
			legend: {
				position: "bottom",
			},
			tooltip: {
				mode: "index",
				intersect: false,
			},
		},
	};

	return <Line options={options} data={data} />;
};

export default Chart9;
