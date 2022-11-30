import "../styles/footerStyle.css";

export default function Footer() {
    return (
        <>
            <div className={'FooterLine'}>
                {new Date().getFullYear().toString()} @Lawyer
            </div>
        </>
    )
}