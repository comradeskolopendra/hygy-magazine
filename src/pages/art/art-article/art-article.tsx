import { FC } from "react";

import styles from "./art-article.module.css";

interface ArtArticleProps {
    text: string;
    photo: string;
}

const ArtArticle: FC<ArtArticleProps> = ({ text, photo }) => {
    return (
        <article className={styles.article}>
            <img src={photo} alt="" className={styles.photo} />
            <p className={styles.text}>{text}</p>
        </article>
    )
};

export default ArtArticle;