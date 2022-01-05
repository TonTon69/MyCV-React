// import classnames from "classnames";
import styles from "./Heading.module.scss";

export default function Heading({ first, second, bg }) {
    return (
        <h2 className={styles.title}>
            <span className={styles.first} style={{ backgroundImage: bg }}>
                {first}
            </span>
            <span>{second}</span>
        </h2>
    );
}
