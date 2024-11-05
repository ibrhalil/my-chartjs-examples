import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { randomInteger, randomTrPeople } from "../../utils/RandomData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
	Title,
);
const Chart5 = () => {
	const labels = randomTrPeople(25);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "index",
				data: labels.map(() => randomInteger(10, 35)),
				backgroundColor: "rgba(50, 130, 222, 0.2)",
				borderColor: "rgba(50, 130, 222, 0.2)",
				borderWidth: 2,
				tension: 0.4,
				fill: {
					target: "start",
				},
			},
			{
				label: "numbers",
				data: labels.map(() => randomInteger(25, 45)),
				backgroundColor: "rgba(50, 130, 222, 0.2)",
				borderColor: "rgba(50, 130, 222, 0.2)",
				borderWidth: 2,
				tension: 0.4,
				fill: {
					target: "start",
				},
			},
			{
				label: "dataset",
				data: labels.map(() => randomInteger(50, 75)),
				backgroundColor: "rgba(50, 130, 222, 0.2)",
				borderColor: "rgba(50, 130, 222, 0.2)",
				borderWidth: 2,
				tension: 0.4,
				fill: {
					target: "start",
				},
			},
			{
				label: "list",
				data: labels.map(() => randomInteger(65, 85)),
				backgroundColor: "rgba(50, 130, 222, 0.2)",
				borderColor: "rgba(50, 130, 222, 0.2)",
				borderWidth: 2,
				tension: 0.4,
				fill: {
					target: "start",
				},
			},
		],
	};

	const options = {
		pointBackgroundColor: "#fff",
		radius: 4,
		pointHoverRadius: 9,
		scales: {
			x: {
				title: {
					display: true,
					text: "Username",
					color: "blue",
				},
			},
			y: {
				beginAtZero: true, // Y ekseninin sıfır
				min: -10, // Alt sınır
				max: 85, // Üst sınır
			},
		},
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "chart",
			},
			tooltip: {
				callbacks: {
					title: (tooltipItems) => {
						return `Username: ${tooltipItems[0].label}`;
					},
					label: (tooltipItem) => {
						return `Value: ${tooltipItem.raw}`;
					},
					footer: (tooltipItems) => {
						return `Value: ${tooltipItems[0].dataset.label}`;
					},
				},
				backgroundColor: "rgba(50, 130, 222, 0.9)",
				titleColor: "white",
				bodyColor: "white",
				footerColor: "white",
				padding: 15,
				displayColors: false,
			},
		},
	};

	return <Line options={options} data={data} />;
};

export default Chart5;
