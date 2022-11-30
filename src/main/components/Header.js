import "../styles/headerStyle.css";
import "../styles/helloTypeWriter.css";

export default function Header() {
    return (
        <>
            <div id={"header"} className={'backgroundGif'}>
                <div className={'helloText css-typing d-flex justify-content-center align-items-center'}>
                    <p className={"typerText"}>I Will Protect Your Rights!</p>
                </div>
                <div className={'headerHappyServices1'}>
                    <div>Reliability</div>
                </div>
                <div className={'headerHappyServices2'}>
                    <div>Experience</div>
                </div>
                <div className={'headerHappyServices3'}>
                    <div>Knowledge</div>
                </div>
            </div>
        </>
    )
}