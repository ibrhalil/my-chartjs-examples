import { Card, Col, Row } from "react-bootstrap";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";

const BarChart = () => {
	return (
		<>
			<div className="container mt-4">
				<Row>
					<Col md={4} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>1. Chart</Card.Title>
								<Chart1 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>
									Static label static data generated barChart
								</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={4} className="mb-3">
						<Card className="p-3">
							<Card.Body style={{ overflowY: "auto" }}>
								<Card.Title>2. Chart</Card.Title>
								<Chart2 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>
									Same 1. Chart but
									<code> responsive: false</code>
								</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={4} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>3. Chart</Card.Title>
								<Chart3 height={300} />
							</Card.Body>
							<Card.Footer>
								<Card.Text>
									Same 1. Chart but add Bar
									<code> height = 300</code>
								</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={4} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>4. Chart</Card.Title>
								<Chart4 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>dummy</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default BarChart;
