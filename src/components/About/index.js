import styles from "./About.module.scss";
import Heading from "../../components/Heading";
import resumeData from "../../utils/resumeData";
import HoangImg from "../../assets/images/minhhoang.png";

export default function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Heading
                    first={"w"}
                    second={"ho am I"}
                    bg={"linear-gradient(to right bottom, #ff6bcb, #ffa400)"}
                />
                <div className={styles.content}>
                    <div className={styles.left}>
                        <p>
                            My real name is <strong>Hoang</strong>. I am
                            currently studying at Hutech. I love to code with
                            <strong> HTML CSS</strong> to make stunning UI and
                            have good UX for website.
                        </p>
                        <p>
                            4 words that "always" describe me: always
                            <strong> smile</strong>, always
                            <strong> gentle</strong>, always
                            <strong> understanding</strong>, always
                            <strong> help</strong>.
                        </p>
                        <a
                            href={resumeData.facebook}
                            className={styles.leftLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Follow me</span>
                        </a>
                    </div>
                    <div className={styles.right}>
                        <img
                            src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/p960x960/269852707_1607151509630038_6173876227435305148_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=6fzxhxK72AgAX9EBNKe&_nc_ht=scontent.fdad1-1.fna&oh=00_AT9KCpsnT9AiYCYXUTcyE0izBjr67IPWHilaW18bbSC7Ww&oe=61D96DEE"
                            alt="hello"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
