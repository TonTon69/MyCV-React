import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <About /> */}
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
