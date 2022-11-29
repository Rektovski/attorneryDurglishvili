import "../styles/serviceStyle.css";
import {Col, Container, Row} from "react-bootstrap";
import colService from "./colService";

export default function Services() {
    return (
        <>
            <>
                <Container fluid id={"services"} className={'services'}>
                    <div className={'ServiceAlert'}>
                        <div className={'ServicesHeader text-center'}>სერვისები</div>
                        <div className={'Alert'}>
                            <h4 >*მომსახურების საფასური*</h4>
                            <div className={'AlertText'}>
                                თითოეული მომსახურების საფასური ინდივიდუალურია. მათ შესახებ ინფორმაციას მიიღებთ
                                ადვოკატთან კონსულტანციის გავლისას, საჭიროებისამებრ.
                            </div>
                        </div>
                    </div>
                    <Row className={'ServicesSpace text-center'}>
                        {
                            colService.map((item, id) => (
                                <Col key={id} className={item.className} sm={6} md={6} lg={4} xl={4} xxl={3}>
                                    <div style={{fontSize: 60}}>
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