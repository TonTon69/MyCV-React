import classnames from "classnames";
import { useRef, useEffect } from "react";
import styles from "./Dialog.module.scss";

export default function Dialog({ title, description, image, show, onClose }) {
    const modalRef = useRef(null);
    const modalClasses = classnames(styles.modal, styles.modalCentered);

    useEffect(() => {
        if (show) {
            modalRef.current.classList.add(styles.show);
            document.body.style.overflow = "hidden";
        } else {
            modalRef.current.classList.remove(styles.show);
            document.body.style.overflow = "unset";
        }
    }, [show]);

    return (
        <div className={styles.wrapper} ref={modalRef}>
            <div className={modalClasses}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h5 className={styles.title}>{title}</h5>
                        <span className={styles.close} onClick={onClose}>
                            &times;
                        </span>
                    </div>
                    <div className={styles.body}>
                        <img src={image} alt={title} />
                        <p>{description}</p>
                    </div>
                    <div className={styles.actions}>abc</div>
                </div>
            </div>
        </div>
    );
}
