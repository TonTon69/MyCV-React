import styles from "./About.module.scss";
import Heading from "../../components/Heading";
import resumeData from "../../utils/resumeData";

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
                            src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/269852707_1607151509630038_6173876227435305148_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=umIeL75f150AX9_Bveb&_nc_ht=scontent.fdad1-1.fna&oh=00_AT-eN-ejPeEUen4i3UO_VGdc_eRPHQ4HiwM3fjYwnwgfvQ&oe=61E0B5EB"
                            alt="hello"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
