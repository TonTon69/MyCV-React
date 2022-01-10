// import { Routes, Route } from "react-router-dom";
// import NotFound from "./pages/NotFound";
// import Home from "./pages/Home";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import About from "./components/About";
import Project from "./components/Project";
import Award from "./components/Award";
import Career from "./components/Career";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Project />
            <Career />
            <Award />
            <Skill />
            <Footer />

            {/* <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes> */}
        </div>
    );
}

export default App;
