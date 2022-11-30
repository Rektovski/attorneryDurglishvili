import "../styles/contactStyle.css";
import {Alert, Container, Form, Spinner} from "react-bootstrap";
import emailjs from "emailjs-com";
import ReactCanvasConfetti from "react-canvas-confetti";
import {useCallback, useEffect, useRef, useState} from "react";
import {canvasStyles, getAnimationSettings} from "./serviceFile/contactService";


export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        await emailjs
            .sendForm(
                'service_tmxa0dr',
                'template_yaeyoff',
                form.current,
                'Y-w-i3WhQ1WOF33bv')
            .then(result => console.log(result.text))
            .catch(error => console.log(error.text + "EmailJS, Invalid Form/Connection Lost/Connection Drop"));
        setLoading(false);
        startAnimation(); // happy animation
        setAlertSuccess(true);

        // now we need alert counter to hide it for example after 3 seconds...
        setTimeout(() => {
            setAlertSuccess(false);
        }, 5000);

        e.target.reset();
    };


    // ***********************
    // ******CONFETTI*********
    // **************EFFECT***
    // ***********************
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState();

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
            refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
        }
    }, []);

    const startAnimation = useCallback(() => {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 400));
            setTimeout(() => {
                clearInterval(intervalId);
                setIntervalId(null);
            }, 400);
        }
    }, [intervalId, nextTickAnimation]);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);
    // ***********************
    // ***********************
    // ***********************
    // ***********************

    return (
        <>
            <Container fluid>
                <div id={"contact"} className={'Contact'}>
                    <figure className="circle"></figure>

                    <Form ref={form} onSubmit={sendEmail} className={'contactForm border rounded m-3 p-3'}>
                        <h1 className={'text-center'}>
                            Contact Us:
                        </h1>


                        <div>
                            <div className={'FormLabels'}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" name={"name"} placeholder="Enter name" required/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" name={"email"} placeholder="Enter email" required/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Subject:</Form.Label>
                                    <Form.Control type="text" name={"subject"} placeholder="Enter subject" required/>
                                </Form.Group>
                            </div>

                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Text:</Form.Label>
                                    <Form.Control className={'formTextarea'} type={"textarea"} as={"textarea"}
                                                  name={"text"} placeholder="Enter text" required/>
                                </Form.Group>
                            </div>
                        </div>

                        {
                            alertSuccess ?
                                <Alert key={"success"} variant={"success"}>
                                    <Alert.Heading>Nice to hear you.</Alert.Heading>
                                    I'll check your e-mail in 10 working days. See you soon ❤️
                                </Alert>
                                : ""
                        }

                        <div className={'d-flex'}>
                            <div className={'flex-fill'}></div>
                            {
                                loading ?
                                    <div className={"d-flex align-items-center"}>
                                        <Spinner style={{color: "lightgray"}} className={'me-2'} animation="grow"
                                                 role="status"></Spinner>
                                        <span className="">Loading...</span>
                                    </div>
                                    :
                                    <>
                                        <button className={'submitHoorayButton'}>Send Message</button>
                                        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
                                    </>
                            }
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    )
}