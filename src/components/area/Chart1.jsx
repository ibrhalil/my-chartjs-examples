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
	const data = {
		labels: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
		],
		datasets: [
			{
				label: "dataset",
				data: [10, 20, 30, 15, 45, 25, 30],
				fill: true,
				backgroundColor: "rgba(222, 44, 192, 0.2)",
				borderColor: "rgba(222, 44, 192, 1)",
				borderWidth: 1,
			},
		],
	};

	return <Line options={{}} data={data} />;
};

export default Chart1;
