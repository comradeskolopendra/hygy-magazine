import { FC } from "react";
import styles from "./swiper-article.module.css";

interface SwiperArticleProps {
    title: string;
    text: string;
    photo: string;
}

const SwiperArticle: FC<SwiperArticleProps> = ({ title, text, photo }) => {

    return (
        <article className={styles.article}>
            <img src={photo} className={styles.photo} alt="" />

            <div className={styles.contents}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text.slice(0, 160)}</p>
            </div>
        </article>
    )
};

export default SwiperArticle;