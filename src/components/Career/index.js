import styles from "./Career.module.scss";
import Heading from "../Heading";
import resumeData from "../../utils/resumeData";
import Timeline from "../../components/Timeline";

export default function Career() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Heading
                    first={"c"}
                    second={"areer of mine"}
                    bg={"linear-gradient(to right bottom, #6723c5, #d23ff0)"}
                />
                <div className={styles.content}>
                    <Timeline data={resumeData.careers} />
                </div>
            </div>
        </div>
    );
}
