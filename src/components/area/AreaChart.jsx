import { Card, Col, Row } from "react-bootstrap";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import Chart5 from "./Chart5";
import Chart6 from "./Chart6";
import Chart7 from "./Chart7";
import Chart8 from "./Chart8";
import Chart9 from "./Chart9";

const AreaChart = () => {
	return (
		<>
			<div className="container mt-4">
				<Row>
					<Col md={6} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>1. Chart</Card.Title>
								<Card.Subtitle>subtitle card 2</Card.Subtitle>
								<Chart1 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>
									Static label static data generated lineChart
								</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={6} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>2. Chart</Card.Title>
								<Card.Subtitle>
									fakerjs random city chart
								</Card.Subtitle>
								<Chart2 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>
									randomly generated cities and data
								</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={6} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>3. Chart</Card.Title>
								<Chart3 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>fill origin</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={6} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>4. Chart</Card.Title>
								<Chart4 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>
									fill: start-end, tension: 0.4
								</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={12} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>5. Chart</Card.Title>
								<Chart5 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>mixed chart</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={6} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>6. Chart</Card.Title>
								<Chart6 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>overlap</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={6} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>7. Chart</Card.Title>
								<Chart7 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>hidden dataset</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={6} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>8. Chart</Card.Title>
								<Chart8 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>Chart Stacked</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={6} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>9. Chart</Card.Title>
								<Chart9 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>Same 8. Chart</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default AreaChart;
