import './App.css';
import Navbar from "./main/components/Navbar";
import Header from "./main/components/Header";
import Services from "./main/components/Services";
import Contact from "./main/components/Contact";
import Footer from "./main/components/Footer";
import AboutUs from "./main/components/AboutUs";

export default function App() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <Services/>
            <AboutUs/>
            <Contact/>
            <Footer/>
        </div>
    );
}
