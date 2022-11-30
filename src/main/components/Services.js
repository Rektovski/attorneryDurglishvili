import "../styles/serviceStyle.css";
import {Col, Container, Row} from "react-bootstrap";
import colService from "./serviceFile/colService";

export default function Services() {
    return (
        <>
            <>
                <Container fluid id={"services"} className={'services'}>
                    <div className={'ServiceAlert'}>
                        <div className={'ServicesHeader text-center'}>Services</div>
                        <div className={'Alert'}>
                            <h4>!Note:</h4>
                            <div className={'AlertText'}>
                                The fee for each service is individual.
                                You will receive information about them In consultation with a attorney.
                            </div>
                        </div>
                    </div>
                    <Row className={'ServicesSpace text-center'}>
                        {
                            colService.map((item, id) => (
                                <Col key={id} className={item.className} sm={6} md={6} lg={4} xl={4} xxl={3}>
                                    <div style={{fontSize: 80}}>
                                        {item.icon}
                                    </div>
                                    <div className={'serviceCardText'}>
                                        {item.desc}
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </>
        </>
    )
}