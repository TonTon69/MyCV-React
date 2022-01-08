import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "Hoang",
    title: "G*OD BOY",
    facebook: "https://www.facebook.com/humiho.69",
    projects: [
        {
            title: "Website to support high school learning",
            image: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/p960x960/269852707_1607151509630038_6173876227435305148_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=6fzxhxK72AgAX9EBNKe&_nc_ht=scontent.fdad1-1.fna&oh=00_AT9KCpsnT9AiYCYXUTcyE0izBjr67IPWHilaW18bbSC7Ww&oe=61D96DEE",
            description:
                "Language used: Jquery, Pug, Scss, Nodejs, Expressjs, MongoDB, Socket.io, Cloudinary.",
            links: [
                {
                    href: "https://github.com/TonTon69/Education-Nodejs",
                    icon: <GitHubIcon />,
                },
                {
                    href: "https://www.hutech.edu.vn/homepage/tin-tuc/hoat-dong-sinh-vien/14599017-chung-ket-tim-kiem-tai-nang-cong-nghe-thong-tin-trien-lam-hoanh-trang-cua-nhung-du-an-cong-nghe-trien-vong",
                    icon: <LanguageIcon />,
                },
            ],
        },
    ],
    awards: [
        {
            image: "https://play-lh.googleusercontent.com/BbrsyoCg_QXlUmleablXnyR51RkQCE3RCjFhiNZkDGF3QM340ne7tuxP3E1F-cWxA3Q",
            bgImgWrapper: "linear-gradient(to right bottom, #5bf6a9, #422eee)",
            title: "Sports festival - Chess",
            description: "2 times won first prize (2019 & 2020)",
        },
        {
            image: "https://www.blackbeltathome.com/wp-content/uploads/5-Qualities-of-Best-Students.jpg",
            bgImgWrapper:
                "linear-gradient( to right bottom, rgb(32, 227, 178), rgb(0, 174, 253))",
            title: "Good 5 students",
            description: "Faculty level (2020)",
        },
        {
            image: "https://mmgroup.vn/wp-content/uploads/2021/07/phat-trien-web-site.jpg",
            bgImgWrapper: "linear-gradient(to right bottom, #33cdf9, #2979ff)",
            title: "IT Got Talent Hutech",
            description: "Second prize - Website application board (2021)",
        },
    ],
};
