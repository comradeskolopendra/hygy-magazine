import { FC } from "react";
import styles from "./article.module.css";

interface ArticleProps {
    name: string;
    photo: string;
    description: string;
}

const Article: FC<ArticleProps> = ({ name, photo, description }) => {

    return (
        <article>
            <h2 className={styles.heading}>{name}</h2>
            <img src={photo} className={styles.photo} alt="" />
            <p className={styles.description}>{description}</p>
        </article>
    )
};

export default Article;