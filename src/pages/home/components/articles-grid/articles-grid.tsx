import { FC } from "react";
import styles from "./grid.module.css";

import Button from "../../../../components/button/button";
import Article from "./article/article";
import { BASE_URL, MOCK_IMAGES_ARTICLES } from "../../../../constants";

interface ArticlesGridProps {
    name: string;
}

const ArticlesGrid: FC<ArticlesGridProps> = ({ name }) => {
    return (
        <section id={name} className={styles.articlesInfo}>
            <h2 className={styles.articlesTitle}>{name}</h2>

            <section className={styles.articles}>
                <Article classNameImage={styles.big} name={"ARTICLE HEADING"} shortInfo={"short info short info short info"} photo={`${BASE_URL}/${MOCK_IMAGES_ARTICLES[2]}`} />

                <div className={styles.smallArticles}>
                    <Article classNameImage={styles.small} name={"ARTICLE HEADING"} shortInfo={"short info short info short info"} photo={`${BASE_URL}/${MOCK_IMAGES_ARTICLES[0]}`} />
                    <Article classNameImage={styles.small} name={"ARTICLE HEADING"} shortInfo={"short info short info short info"} photo={`${BASE_URL}/${MOCK_IMAGES_ARTICLES[1]}`} />
                </div>

            </section>

            <div className={styles.buttonWrapper}>
                <Button>
                    SHOW MORE
                </Button>
            </div>
        </section>
    )
};

export default ArticlesGrid;