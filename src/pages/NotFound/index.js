import styles from "./NotFound.module.scss";
import AstronautMoon from "../../assets/images/astronaut_moon.png";

export default function NotFound() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span>4</span>
                    <div className={styles.contentImg}>
                        <img src={AstronautMoon} alt="AstronautMoon" />
                    </div>
                    <span>4</span>
                </div>
                <h3>
                    page <span>not</span> found 😱
                </h3>
            </div>
        </div>
    );
}
