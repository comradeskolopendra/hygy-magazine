import styles from "./article.module.css";
import { FC } from "react";

interface ArticleProps {
    shortInfo: string;
    heading: string;
    photo: string;
}

const Article: FC<ArticleProps> = ({ shortInfo, heading, photo }) => {
    return (
        <article className={styles.article}>
            <h2 className={styles.title}>
                {heading}
            </h2>

            <img src={photo} className={styles.image} alt="" />

            <p className={styles.description}>
                {shortInfo}
            </p>
        </article>
    )
};

export default Article;