import classnames from "classnames";
import styles from "./Dialog.module.scss";

export default function Dialog() {
    const classes = classnames(styles.modal, styles.modalCentered);

    return (
        <div className={styles.wrapper}>
            <div className={classes}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h5 className={styles.title}>abc</h5>
                        <span className={styles.close}>&times;</span>
                    </div>
                    <div className={styles.body}>
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className={styles.actions}>abc</div>
                </div>
            </div>
        </div>
    );
}
