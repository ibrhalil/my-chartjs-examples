import { Card, Col, Row } from "react-bootstrap";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";

const AreaChart = () => {
	return (
		<>
			<div className="container mt-4">
				<Row>
					<Col md={4} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>Card 1</Card.Title>
								<Card.Subtitle>subtitle card 2</Card.Subtitle>
								<Chart1 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>
									This is the content for the third card. You
									can add any information you want here.
								</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={8} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>Card 2</Card.Title>
								<Card.Subtitle>city chart</Card.Subtitle>
								<Chart2 />
							</Card.Body>
							<Card.Footer>
								<Card.Text>
									This is the content for the third card. You
									can add any information you want here.
								</Card.Text>
							</Card.Footer>
						</Card>
					</Col>
					<Col md={4} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>Card 3</Card.Title>
								<Card.Text>
									This is the content for the third card. You
									can add any information you want here.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={8} className="mb-3">
						<Card className="p-3">
							<Card.Body>
								<Card.Title>Card 4</Card.Title>
								<Card.Text>
									This is the content for the third card. You
									can add any information you want here.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default AreaChart;
