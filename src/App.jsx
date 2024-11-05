import { Tab, Tabs } from "react-bootstrap";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import AreaChart from "./components/area/AreaChart";
import Home from "./components/home/Home";
import BarChart from "./components/bar/BarChart";

function App() {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className="container mt-3">
			<Tabs
				defaultActiveKey="/"
				activeKey={location.pathname}
				id="uncontrolled-tab-example"
				className="mb-3"
				onSelect={(selectedKey) => navigate(selectedKey)}
			>
				<Tab eventKey="/" title="Home" />
				<Tab eventKey="/area" title="Area" />
				<Tab eventKey="/bar" title="Bar" />
				<Tab eventKey="/bubble" title="Bubble" />
				<Tab eventKey="/doughnut" title="Doughnut" />
				<Tab eventKey="/pie" title="Pie" />
				<Tab eventKey="/line" title="Line" />
			</Tabs>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/area" element={<AreaChart />} />
				<Route path="/bar" element={<BarChart />} />
			</Routes>
		</div>
	);
}

export default App;
