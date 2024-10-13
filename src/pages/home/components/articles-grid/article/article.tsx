import { FC } from "react";
import styles from "./article.module.css";

interface ArticleProps {
    className: string;
    name: string;
    photo: string;
    shortInfo: string;
}

const Article: FC<ArticleProps> = ({ name, photo, shortInfo, className }) => {

    return (
        <article className={`${styles.article}  ${className}`}>
            <h2 className={styles.title}>{name}</h2>
            <img src={photo} className={`${styles.image} `} alt="" />
            <p className={styles.shortInfo}>{shortInfo}</p>
        </article>
    )
};

export default Article;