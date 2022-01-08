import styles from "./Award.module.scss";
import Heading from "../Heading";
import ImgWrapper from "../ImgWrapper";
import resumeData from "../../utils/resumeData";

export default function Award() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Heading
                    first={"a"}
                    second={"wards of mine"}
                    bg={"linear-gradient(to right bottom, #ff6bcb, #ffa400)"}
                />
                <div className={styles.content}>
                    {resumeData.awards.map((award, index) => (
                        <div key={index} className={styles.item}>
                            <ImgWrapper
                                image={award.image}
                                bg={award.bgImgWrapper}
                            />
                            <div className={styles.itemInfo}>
                                <h3>{award.title}</h3>
                                <p>{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
