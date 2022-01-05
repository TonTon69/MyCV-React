import styles from "./About.module.scss";
import Heading from "../../components/Heading";

export default function About() {
    return (
        <div className={styles.wrapper}>
            <Heading
                first={"w"}
                second={"ho am I"}
                bg={"linear-gradient(to right bottom, #ff6bcb, #ffa400)"}
            />
            <div></div>
        </div>
    );
}
