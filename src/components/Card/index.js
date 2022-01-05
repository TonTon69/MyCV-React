import styles from "./Card.module.scss";

export default function Card({ img, description, titleBtn }) {
    return (
        <div className={styles.wrapper}>
            <img src={img} className={styles.imgTop} alt="..." />
            <div className={styles.body}>
                <p className={styles.text}>{description}</p>
                <div className={styles.btn}>{titleBtn}</div>
            </div>
        </div>
    );
}
