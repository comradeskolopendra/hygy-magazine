import { FC } from "react";
import styles from "./articles-block.module.css";

import Button from "../../../../components/button/button";
import { BASE_URL, MOCK_IMAGES_ARTICLES } from "../../../../constants";
import Article from "./article/article";

import photo from "../../../../assets/images/griefs.jpg";

interface ArticlesGridProps {
    name: string;
    articles: any[];
}

const ArticlesBlock: FC<ArticlesGridProps> = ({ name }) => {
    return (
        <section id={name} className={styles.articlesInfo}>
            <h2 className={styles.articlesTitle}>{name}</h2>

            <section className={styles.articles}>
                {[1, 2, 3, 4, 5, 6].map(() => (
                    <Article
                        name={"Heading title"}
                        // photo={`${BASE_URL}${MOCK_IMAGES_ARTICLES[1]}`}
                        photo={photo}
                        description="Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London`s"
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