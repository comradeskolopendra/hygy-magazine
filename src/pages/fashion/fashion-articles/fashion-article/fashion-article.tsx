import { FC } from "react";
import styles from "./fashion-article.module.css";

interface SmallArticleProps {
    photo: string;
    title: string;
    text: string;
    className?: string;
}

const FashionArticle: FC<SmallArticleProps> = ({ photo, title, text, className }) => {

    return (
        <article className={`${styles.article} ${className}`}>
            <img src={photo} alt="" className={styles.photo} />

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </article>
    )
};

export default FashionArticle;