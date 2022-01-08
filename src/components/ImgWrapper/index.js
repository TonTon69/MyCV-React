import styles from "./ImgWrapper.module.scss";

export default function ImgWrapper({ image, bg }) {
    return (
        <div className={styles.container} style={{ backgroundImage: bg }}>
            <img
                src={image instanceof Object ? image.type : image}
                alt="hello"
            />
        </div>
    );
}
