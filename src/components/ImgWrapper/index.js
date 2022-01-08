import styles from "./ImgWrapper.module.scss";

export default function ImgWrapper({ image, bg, title }) {
    return (
        <div className={styles.container} style={{ backgroundImage: bg }}>
            {title !== undefined ? (
                <span>{title}</span>
            ) : (
                <img
                    src={image instanceof Object ? image.type : image}
                    alt="hi"
                />
            )}
        </div>
    );
}
