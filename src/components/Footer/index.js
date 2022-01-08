import styles from "./Footer.module.scss";
import IconHeart from "../../assets/images/icon-heart.png";
import ImgWrapper from "../ImgWrapper";

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <ImgWrapper
                image={<IconHeart />}
                bg={"linear-gradient(to right, #9525fb, #ff70a4)"}
            />
            <h2>see you again</h2>
        </div>
    );
}
