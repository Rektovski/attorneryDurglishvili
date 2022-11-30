import "../styles/aboutUsStyle.css";

export default function AboutUs() {
    return (
        <>
            <div id={'aboutus'} className={'AboutUs'}>
                <figure className="circleAboutUs"></figure>

                <h1 className={'AboutUsHeader'}>About Us...</h1>
                <div className={"AboutUsText"}>
                    <p>"Lawyer Person" is one of the leading legal firms in the Georgian legal market
                        it has been positioning itself for 25 years and its clients - local and foreign
                        individuals, as well as legal persons and organizations - qualified legal services
                        offers a wide range. During the long activity of "Lawyer Person"
                        established a reputation as a reliable, ethical and highly professional firm.
                    </p>
                </div>
            </div>
        </>
    )
}