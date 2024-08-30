import { FC } from "react";
import styles from "./articles-block.module.css";

import Button from "../../../../components/button/button";
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

            <div className={styles.contentWrapper}>
                <section className={styles.articles}>
                    {[1, 2, 3, 4, 5, 6].map(() => (
                        <Article
                            name={"Heading title"}
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
            </div>
        </section>
    )
};

export default ArticlesBlock;