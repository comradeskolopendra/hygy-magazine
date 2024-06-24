import { FC } from "react";
import Button from "../../../../components/button/button";
import Article from "./article/article";
import styles from "./articles-block.module.css";

interface ArticlesSpaceProps {
    name: string;
    articles: { shortInfo: string; heading: string; photo: string }[];
}

const ArticlesBlock: FC<ArticlesSpaceProps> = ({ name, articles }) => {
    return (
        <section id={name} className={styles.articlesInfo}>
            <h2 className={styles.articlesTitle}>{name}</h2>

            <section className={styles.articles}>
                {articles.map(element => (
                    <Article
                        heading={element.heading}
                        photo={element.photo}
                        shortInfo={element.shortInfo}
                        key={element.photo}
                    />
                ))}
            </section>

            <div className={styles.buttonWrapper}>
                <Button>
                    SHOW MORE
                </Button>
            </div>
        </section>
    )
};

export default ArticlesBlock;