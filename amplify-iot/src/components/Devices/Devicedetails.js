import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function Devicedetails(){
    return(
        <Container>
            <Row className="px-4 myp-5">
                <Col><h1>Devicedetails</h1></Col>
            </Row>
            <Row>
                <Col className="px-2 my-2">
                    <Card style={{width: "12 rem"}}>
                        <Card.Img src="/img/iot1.png" variant="top"/>
                        <Card.Body>
                            <Card.Title> Device1</Card.Title>
                            <Card.Text>Location: Sample Location 

                                        Type: Sample Device Type 

                                        Humidity: Sample Humidity

                                        Light Status: Sample Light Status

                                        Temperature: Sample Room Temperature</Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{width: "12 rem"}}>
                        <Card.Img src="/img/iot1.png" variant="top"/>
                        <Card.Body>
                            <Card.Title> Device2</Card.Title>
                            <Card.Text>Location: Sample Location 

                                        Type: Sample Device Type 

                                        Humidity: Sample Humidity

                                        Light Status: Sample Light Status

                                        Temperature: Sample Room Temperature</Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{width: "12 rem"}}>
                        <Card.Img src="/img/iot1.png" variant="top"/>
                        <Card.Body>
                            <Card.Title> Device3</Card.Title>
                            <Card.Text>Location: Sample Location 

                                        Type: Sample Device Type 

                                        Humidity: Sample Humidity

                                        Light Status: Sample Light Status

                                        Temperature: Sample Room Temperature</Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Devicedetails;