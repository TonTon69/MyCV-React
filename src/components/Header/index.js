import styles from "./Header.module.scss";
import Logo from "../../assets/images/logo.png";
import ReadingAstronaut from "../../assets/images/reading_astronaut.png";
import resumeData from "../../utils/resumeData";

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.hello}>
                <img src={ReadingAstronaut} alt="hello" />
            </div>
            <img className={styles.logo} src={Logo} alt="logo" />
            <div className={styles.heading}>
                <span className={styles.headingHot}>hello</span>, my name is
            </div>
            <svg viewBox="0 0 900 100" className={styles.svgText}>
                <symbol id="h-text">
                    <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                        {resumeData.name}
                    </text>
                </symbol>
                <use xlinkHref="#h-text" className={styles.hText}></use>
                <use xlinkHref="#h-text" className={styles.hText}></use>
                <use xlinkHref="#h-text" className={styles.hText}></use>
                <use xlinkHref="#h-text" className={styles.hText}></use>
                <use xlinkHref="#h-text" className={styles.hText}></use>
            </svg>
            <div className={styles.heading}>
                i am
                <span className={styles.headingHot}> {resumeData.title}</span>
            </div>
        </div>
    );
}
