import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import About from "./components/About";
import Project from "./components/Project";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Project />
            <Skill />
            <Footer />
        </div>
    );
}

export default App;
