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
import { randomInteger, randomTrAnimal } from "../../utils/RandomData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);
const Chart7 = () => {
	const labels = randomTrAnimal(8);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "index",
				data: labels.map(() => randomInteger(10, 35)),
				backgroundColor: "rgba(20, 4, 200, .7)",
				borderColor: "rgba(20, 4, 200, 1)",
				borderWidth: 3,
				tension: 0.4,
				fill: true,
				hidden: true,
			},
			{
				label: "numbers",
				data: labels.map(() => randomInteger(15, 40)),
				backgroundColor: "rgba(250, 130, 9, .7)",
				borderColor: "rgba(250, 130, 9, 1)",
				borderWidth: 2,
				tension: 0.4,
				fill: true,
			},
		],
	};

	const options = {
		radius: 0,
		responsive: true,
	};

	return <Line options={options} data={data} />;
};

export default Chart7;
