import {FiPhoneCall as ServiceCallIcon} from "react-icons/fi";
import {FaBabyCarriage as ServiceBabyIcon, FaHeartBroken as ServiceDivorceIcon} from "react-icons/fa";
import {BsSearch as ServiceSearchIcon} from "react-icons/bs";
import {GiBlood as ServiceBloodIcon, GiTeacher as ServiceTeachIcon} from "react-icons/gi";
import {ImBooks as ServiceDocumentationIcon} from "react-icons/im";

const colService = [
    {
        "icon": <ServiceCallIcon/>,
        "className": "serviceCard",
        "desc": "Free Consultation"
    },
    {
        "icon": <ServiceDocumentationIcon/>,
        "className": "serviceCard",
        "desc": "Writing/Reading Documentation"
    },
    {
        "icon": <ServiceSearchIcon/>,
        "className": "serviceCard",
        "desc": "Research"
    },
    {
        "icon": <ServiceBabyIcon/>,
        "className": "serviceCard",
        "desc": "Juvenile jurisprudence"
    },
    {
        "icon": <ServiceBloodIcon/>,
        "className": "serviceCard",
        "desc": "Criminal Law"
    },
    {
        "icon": <ServiceDivorceIcon/>,
        "className": "serviceCard",
        "desc": "Divorcing"
    },
    {
        "icon": "",
        "className": "",
        "desc": ""
    },
    {
        "icon": <ServiceTeachIcon/>,
        "className": "serviceCard",
        "desc": "Teaching/Training"
    },
    {
        "icon": "",
        "className": "",
        "desc": ""
    },
]

export default colService;