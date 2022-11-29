import './App.css';
import Navbar from "./main/components/Navbar";
import Header from "./main/components/Header";
import Services from "./main/components/Services";

export default function App() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <Services/>
        </div>
    );
}
