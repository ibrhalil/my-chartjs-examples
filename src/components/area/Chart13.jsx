import {
	Chart as ChartJS,
	Filler,
	Legend,
	LineElement,
	PointElement,
	RadialLinearScale,
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
);

const Chart13 = () => {
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
				fill: false,
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgb(255, 99, 132)",
				pointBackgroundColor: "rgb(255, 99, 132)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(255, 99, 132)",
				tension: 0.3,
			},
			{
				label: "My 2 Dataset",
				data: [28, 48, 40, 19, 96, 27, 100],
				fill: true,
				backgroundColor: "rgba(54, 162, 235, 0.2)",
				borderColor: "rgb(54, 162, 235)",
				pointBackgroundColor: "rgb(54, 162, 235)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(54, 162, 235)",
				tension: 0.3,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: "bottom",
				labels: {
					color: "black",
					font: {
						size: 14,
					},
				},
			},
			tooltip: {
				enabled: true,
				backgroundColor: "rgba(0,0,0,0.8)",
				titleFont: {
					size: 18,
				},
				bodyFont: {
					size: 14,
				},
				padding: 15,
				borderColor: "rgba(34, 202, 236, 1)",
				borderWidth: 1,
			},
		},
		scales: {
			r: {
				suggestedMin: 15,
				suggestedMax: 200,
				angleLines: {
					color: "rgba(200, 0, 0, 0.3)",
				},
				grid: {
					color: "rgba(0, 150, 0, 0.3)",
				},
				pointLabels: {
					font: {
						size: 12,
					},
					color: "#60f",
				},
				ticks: {
					beginAtZero: true,
					stepSize: 15,
					color: "#f06",
				},
			},
		},
		elements: {
			line: {
				borderWidth: 2,
			},
			point: {
				radius: 5,
				hoverRadius: 10,
				hoverBorderWidth: 1,
			},
		},
	};

	return <Radar options={options} data={data} />;
};

export default Chart13;
