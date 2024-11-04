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
import { randomInteger, randomTrPeople } from "../../utils/RandomData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);
const Chart4 = () => {
	const options = {};

	const labels = randomTrPeople(10);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "index",
				data: labels.map(() => randomInteger(-18, 30)),
				//fill: true,
				backgroundColor: "rgba(255, 99, 12, 0.2)",
				borderColor: "rgba(255, 99, 12, .2)",
				borderWidth: 1,
				tension: 0.4,
				fill: {
					target: "start",
					//above: "rgba(255, 99, 12, .2)", // üstteki
					below: "rgba(255, 99, 12, .2)", // alttaki
				},
			},
			{
				label: "numbers",
				data: labels.map(() => randomInteger(30, 70)),
				//fill: true,
				backgroundColor: "rgba(222, 222, 192, 0.2)",
				borderColor: "rgba(222, 222, 192, 1)",
				borderWidth: 1,
				tension: 0.4,
				fill: {
					target: "end",
					above: "rgba(222, 222, 192, 0.8)", // üstteki
					//below: "rgba(255, 99, 132, 0.2)", // alttaki
				},
			},
		],
	};

	return <Line options={options} data={data} />;
};

export default Chart4;
