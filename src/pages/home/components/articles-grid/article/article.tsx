import { FC } from "react";
import styles from "./article.module.css";

interface ArticleProps {
    classNameImage?: string;
    name: string;
    photo: string;
    shortInfo: string;
}

const Article: FC<ArticleProps> = ({ classNameImage, name, photo, shortInfo }) => {

    return (
        <article className={`${styles.article}  ${classNameImage}`}>
            <h2 className={styles.title}>{name}</h2>
            <img src={photo} className={`${styles.image} `} alt="" />
            <p className={styles.shortInfo}>{shortInfo}</p>
        </article>
    )
};

export default Article;