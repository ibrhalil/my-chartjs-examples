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

const Chart11 = () => {
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
				fill: "-1",
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgb(255, 99, 132)",
				pointBackgroundColor: "rgb(255, 99, 132)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(255, 99, 132)",
			},
			{
				label: "My 2 Dataset",
				data: [28, 48, 40, 19, 96, 27, 100],
				fill: "1",
				backgroundColor: "rgba(54, 162, 235, 0.2)",
				borderColor: "rgb(54, 162, 235)",
				pointBackgroundColor: "rgb(54, 162, 235)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(54, 162, 235)",
			},
			{
				label: "My 3 Dataset",
				data: [10, 99, 34, 3, 56, 44, 40],
				fill: "-1",
				backgroundColor: "rgba(154, 12, 25, 0.2)",
				borderColor: "rgb(154, 12, 25)",
				pointBackgroundColor: "rgb(154, 12, 25)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(154, 12, 25)",
			},
		],
	};

	const options = {
		elements: {
			line: {
				borderWidth: 2,
			},
		},
	};

	return <Radar options={options} data={data} />;
};

export default Chart11;
