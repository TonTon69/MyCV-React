import classnames from "classnames";
import styles from "./Timeline.module.scss";

export default function Timeline({ data }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                {data.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div
                            className={classnames(styles.content, {
                                [styles.contentRight]: item.display === "right",
                                [styles.contentLeft]: item.display === "left",
                            })}
                        >
                            <div className={styles.date}>
                                <div>{item.dateTop}</div>
                                <div>{item.dateBottom}</div>
                            </div>
                            <span className={styles.name}>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
