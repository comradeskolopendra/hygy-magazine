import styles from "./article.module.css";

import { cutString } from "../../../../../helpers";

import articlePhoto from "../../../../../assets/images/article-photo.jpg";
import { FC } from "react";

interface ArticleProps {
    shortInfo?: string;
    heading?: string;
    photo?: string;
}

const Article: FC<ArticleProps> = ({ shortInfo, heading, photo }) => {
    return (
        <article className={styles.article}>
            <h2 className={styles.heading}>
                {heading || "Article Header"}
            </h2>
            <img src={photo || articlePhoto} className={styles.image} alt="" />

        </article>
    )
};

export default Article;