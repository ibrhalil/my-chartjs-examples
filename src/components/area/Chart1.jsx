import { faker } from "@faker-js/faker";
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

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);
const Chart1 = () => {
	const options = {};

	const labels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	];

	const data = {
		labels: labels,
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => faker.number.int({ min: -10, max: 80 })),
				fill: true,
				backgroundColor: "rgba(222, 44, 192, 0.2)",
				borderColor: "rgba(222, 44, 192, 1)",
				borderWidth: 1,
			},
			{
				label: "Dataset 2",
				data: labels.map(() => faker.number.int({ min: 0, max: 90 })),
				fill: true,
				backgroundColor: "rgba(33, 222, 192, 0.2)",
				borderColor: "rgba(33, 222, 192, 1)",
				borderWidth: 1,
			},
		],
	};

	return <Line options={options} data={data} />;
};

export default Chart1;
