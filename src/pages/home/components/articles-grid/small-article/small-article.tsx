import { FC } from "react";
import styles from "./small-article.module.css";

interface SmallArticleProps {
    image: string;
    title: string;
    description: string;
}

const SmallArticle: FC<SmallArticleProps> = ({ image, title, description }) => {

    return (
        <article
            className={styles.article}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover"
            }}
        >

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </article>
    );
};

export default SmallArticle;