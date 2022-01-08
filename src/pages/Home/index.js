import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skill from "../../components/Skill";
import About from "../../components/About";
import Project from "../../components/Project";
import Award from "../../components/Award";

export default function Home() {
    return (
        <>
            <Header />
            <About />
            <Project />
            <Award />
            <Skill />
            <Footer />
        </>
    );
}
