import styles from "./Footer.module.scss";
import IconHeart from "../../assets/images/icon-heart.png";

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <img src={IconHeart} alt="heart" />
            </div>
            <h2>see you again</h2>
        </div>
    );
}
