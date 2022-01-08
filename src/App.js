import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
