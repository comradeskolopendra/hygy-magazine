import styles from "./article.module.css";
import { FC } from "react";

interface ArticleProps {
    shortInfo: string;
    heading: string;
    photo: string;
    isCenter: boolean;
}

const Article: FC<ArticleProps> = ({ shortInfo, heading, photo, isCenter }) => {
    return (
        <article className={styles.article}>
            <h2 className={`${styles.title} ${isCenter ? styles.bigTitle : styles.smallTitle}`}>
                {heading}
            </h2>

            <img src={photo} className={`${styles.image} ${isCenter ? styles.bigImage : styles.smallImage}`} alt="" />

            <p className={`${styles.description} ${isCenter ? styles.bigDescription : styles.smallDescription}`}>
                {shortInfo}
            </p>
        </article>
    )
};

export default Article;