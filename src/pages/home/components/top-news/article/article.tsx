import { FC } from "react";
import styles from "./article.module.css";

interface ArticleProps {
    image: string;
    title: string;
    description: string;
}

const Article: FC<ArticleProps> = ({ image, title, description }) => {

    return (
        <article className={styles.article}>

            <div className={styles.imageWrapper}>
                <img src={image} alt="" />
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </article>
    )
};

export default Article;