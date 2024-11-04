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
const Chart3 = () => {
	const options = {};

	const labels = randomTrPeople(10);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "index",
				data: labels.map(() => randomInteger(-18, 32)),
				//fill: true,
				backgroundColor: "rgba(255, 99, 142, 0.2)",
				borderColor: "rgba(222, 44, 12, 1)",
				borderWidth: 1,
				fill: {
					target: "origin",
					above: "rgba(75, 192, 192, 0.2)", // üstteki
					below: "rgba(255, 99, 132, 0.2)", // alttaki
				},
			},
		],
	};

	return <Line options={options} data={data} />;
};

export default Chart3;
