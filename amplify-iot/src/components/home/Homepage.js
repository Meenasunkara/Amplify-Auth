import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Homepage(){
   
return(
    <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image 
                        src="img/iot.jpg" 
                        />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">IOT App</h1>
                    <p className="mt-4"></p>       
                    <Link to="/Devices">
                     <Button variant="outline-primary">View Devices &gt;&gt;</Button>
                </Link>

                </Col>
             </Row>
    </Container>
)
}
export default Homepage;