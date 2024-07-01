import { FC } from "react";
import styles from "./article.module.css";

interface ArticleProps {
    name: string;
    photo: string;
}

const Article: FC<ArticleProps> = ({ name, photo }) => {

    return (
        <article>
            <h2 className={styles.heading}>{name}</h2>
            <img src={photo} className={styles.photo} alt="" />
        </article>
    )
};

export default Article;