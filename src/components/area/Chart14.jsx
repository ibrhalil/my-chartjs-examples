import {
	Chart as ChartJS,
	Filler,
	Legend,
	LineElement,
	PointElement,
	RadialLinearScale,
	Title,
	Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
	Title,
);

const Chart14 = () => {
	const data = {
		labels: [
			"Eating",
			"Drinking",
			"Sleeping",
			"Designing",
			"Coding",
			"Cycling",
			"Running",
		],
		datasets: [
			{
				label: "My 1 Dataset",
				data: [65, 59, 90, 81, 56, 55, 40],
				backgroundColor: "rgba(34, 202, 236, 0.2)",
				borderColor: "rgba(34, 202, 236, 1)",
				borderWidth: 2,
				pointBackgroundColor: "rgba(34, 202, 236, 1)",
				pointBorderColor: "#fff",
				pointBorderWidth: 2,
				pointRadius: 5,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: true,
		elements: {
			line: {
				tension: 0.3,
			},
		},
		scales: {
			r: {
				max: 80,
				min: 30,
				angleLines: {
					display: true,
					color: "rgba(100, 200, 0, 0.2)",
					lineWidth: 4,
				},
				grid: {
					color: "rgba(0, 0, 100, 0.2)",
					lineWidth: 1,
				},
				pointLabels: {
					font: {
						size: 16,
					},
					color: "#3a3",
				},
				ticks: {
					beginAtZero: false,
					backdropColor: "rgba(0, 0, 255, 0.5)",
					color: "#f0f",
					showLabelBackdrop: true,
					stepSize: 7,
				},
			},
		},
		plugins: {
			title: {
				display: true,
				text: "title",
			},
		},
	};

	return <Radar options={options} data={data} />;
};

export default Chart14;
