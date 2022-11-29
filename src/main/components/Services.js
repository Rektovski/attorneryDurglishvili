import "../styles/serviceStyle.css";
import {FiPhoneCall as ServiceCallIcon} from "react-icons/fi";
import {FaBabyCarriage as ServiceBabyIcon, FaHeartBroken as ServiceDivorceIcon} from "react-icons/fa";
import {BsSearch as ServiceSearchIcon} from "react-icons/bs";
import {GiBlood as ServiceBloodIcon, GiTeacher as ServiceTeachIcon} from "react-icons/gi";
import {ImBooks as ServiceDocumentationIcon} from "react-icons/im";
import {Alert, Col, Container, Row} from "react-bootstrap";

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
                        <div>
                            თითოეული მომსახურების საფასური ინდივიდუალურია. მათ შესახებ ინფორმაციას მიიღებთ ადვოკატთან კონსულტანციის გავლისას, საჭიროებისამებრ.
                        </div>
                    </Alert>
                    <Row className={'Services text-center'}>
                        <Col className={'serviceCard'} sm={6} md={6} lg={4} xl={4} xxl={3} >
                            <ServiceCallIcon size={60}/>
                            <div className={'serviceCardText'}>უფასო კონსულტანცია</div>
                        </Col>
                        <Col className={'serviceCard'} sm={6} md={6} lg={4} xl={4} xxl={3} >
                            <ServiceDocumentationIcon size={60}/>
                            <div className={'serviceCardText'}>დოკუმენტაციის მომზადება</div>
                        </Col>
                        <Col className={'serviceCard'} sm={6} md={6} lg={4} xl={4} xxl={3} >
                            <ServiceSearchIcon size={60}/>
                            <div className={'serviceCardText'}>გამოძიება</div>
                        </Col>
                        <Col className={'serviceCard'} sm={6} md={6} lg={4} xl={4} xxl={3} >
                            <ServiceBabyIcon size={60}/>
                            <div className={'serviceCardText'}>ბავშვთა იურისპრუდენცია</div>
                        </Col>
                        <Col className={'serviceCard'} sm={6} md={6} lg={4} xl={4} xxl={3} >
                            <ServiceBloodIcon size={60}/>
                            <div className={'serviceCardText'}>სისხლის სამართალი</div>
                        </Col>
                        <Col className={'serviceCard'} sm={6} md={6} lg={4} xl={4} xxl={3} >
                            <ServiceDivorceIcon size={60}/>
                            <div className={'serviceCardText'}>განქორწინება</div>
                        </Col>
                        <Col className={'serviceCard'} sm={6} md={6} lg={4} xl={4} xxl={3} >
                            <ServiceTeachIcon size={60}/>
                            <div className={'serviceCardText'}>სწავლება/ტრენინგი</div>
                        </Col>
                    </Row>
                </Container>
            </>
        </>
    )
}