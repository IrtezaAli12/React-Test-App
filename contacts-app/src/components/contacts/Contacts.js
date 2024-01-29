import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Contacts() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img
                            src="/img/contact_1.png"
                            variant="top"  />
                        <Card.Body>
                            <Card.Title>Irteza Ali</Card.Title>
                            <Card.Text>
                                irteza@test.com
                                <br />555.123.4567
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img
                            src="/img/contact_1.png"
                            variant="top"  />
                        <Card.Body>
                            <Card.Title>Qumber Ali</Card.Title>
                            <Card.Text>
                                qumber@test.com
                                <br />555.123.5678
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img
                            src="/img/contact_1.png"
                            variant="top"  />
                        <Card.Body>
                            <Card.Title>Ahad Ali</Card.Title>
                            <Card.Text>
                                ahad@test.com
                                <br />555.123.6789
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts;