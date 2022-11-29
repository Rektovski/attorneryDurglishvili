import {FiPhoneCall as ServiceCallIcon} from "react-icons/fi";
import {FaBabyCarriage as ServiceBabyIcon, FaHeartBroken as ServiceDivorceIcon} from "react-icons/fa";
import {BsSearch as ServiceSearchIcon} from "react-icons/bs";
import {GiBlood as ServiceBloodIcon, GiTeacher as ServiceTeachIcon} from "react-icons/gi";
import {ImBooks as ServiceDocumentationIcon} from "react-icons/im";

const colService = [
    {
        "icon": <ServiceCallIcon/>,
        "className": "serviceCard",
        "desc": "უფასო კონსულტანცია"
    },
    {
        "icon": <ServiceDocumentationIcon/>,
        "className": "serviceCard",
        "desc": "დოკუმენტაციასთან მუშაობა"
    },
    {
        "icon": <ServiceSearchIcon/>,
        "className": "serviceCard",
        "desc": "გამოძიება"
    },
    {
        "icon": <ServiceBabyIcon/>,
        "className": "serviceCard",
        "desc": "არასრულწლოვანთა მიმართულება"
    },
    {
        "icon": <ServiceBloodIcon/>,
        "className": "serviceCard",
        "desc": "სისხლის სამართალი"
    },
    {
        "icon": <ServiceDivorceIcon/>,
        "className": "serviceCard",
        "desc": "განქორწინება"
    },
    {
        "icon": "",
        "className": "",
        "desc": ""
    },
    {
        "icon": <ServiceTeachIcon/>,
        "className": "serviceCard",
        "desc": "სწავლება/ტრენინგი"
    },
    {
        "icon": "",
        "className": "",
        "desc": ""
    },
]

export default colService;