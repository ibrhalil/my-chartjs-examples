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
import { randomCities, randomInteger } from "../../utils/RandomData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);
const Chart2 = () => {
	const options = {};

	const labels = randomCities(15);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "city",
				data: labels.map(() => randomInteger(10, 90)),
				fill: true,
				backgroundColor: "rgba(222, 44, 192, 0.2)",
				borderColor: "rgba(222, 44, 192, 1)",
				borderWidth: 1,
			},
		],
	};

	return <Line options={options} data={data} />;
};

export default Chart2;
