import "../styles/headerStyle.css";

export default function Header() {
    return (
        <>
            <div id={"header"} className={'backgroundGif'}>
                <div className={'helloText'}>
                    <div>მე დავიცავ თქვენს უფლებებს</div>
                </div>
                <div className={'headerHappyServices1'}>
                    <div>სანდოობა</div>
                </div>
                <div className={'headerHappyServices2'}>
                    <div>გამოცდილება</div>
                </div>
                <div className={'headerHappyServices3'}>
                    <div>განათლება</div>
                </div>
            </div>
        </>
    )
}