import "../styles/serviceStyle.css";
import {Alert, Col, Container, Row} from "react-bootstrap";
import colService from "./colService";

export default function Services() {
    return (
        <>
            <>
                <Container fluid id={"services"}>
                    <h2 className={'my-2 text-center'}>
                        სერვისები
                    </h2>
                    <Alert>
                        <Alert.Heading>
                            *მომსახურების საფასური*
                        </Alert.Heading>
                        <div className={'ServicePriceInfo'}>
                            თითოეული მომსახურების საფასური ინდივიდუალურია. მათ შესახებ ინფორმაციას მიიღებთ ადვოკატთან კონსულტანციის გავლისას, საჭიროებისამებრ.
                        </div>
                    </Alert>
                    <Row className={'Services text-center'}>
                        {
                            colService.map((item, id)=>(
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