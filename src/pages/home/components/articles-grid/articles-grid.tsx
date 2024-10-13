import { FC } from "react";
import styles from "./grid.module.css";

import Button from "../../../../components/button/button";
import Article from "./article/article";
import { BASE_URL, MOCK_IMAGES_ARTICLES } from "../../../../constants";
import SmallArticle from "./small-article/small-article";

import photo from "../../../../assets/images/griefs.jpg";

interface ArticlesGridProps {
    name: string;
    showMoreHandler: () => void;
}

const ArticlesGrid: FC<ArticlesGridProps> = ({ name, showMoreHandler }) => {
    return (
        <section id={name} className={styles.articlesInfo}>
            <h2 className={styles.articlesTitle}>{name}</h2>

            <div className={styles.contentWrapper}>
                <section className={styles.articles}>
                    <Article className={styles.big} name={"ARTICLE TITLE ( THE 2ND LINE) "} shortInfo={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is almost always"} photo={`${BASE_URL}/${MOCK_IMAGES_ARTICLES[2]}`} />

                    <div className={styles.smallArticles}>
                        <SmallArticle title={"ARTICLE TITLE ( THE 2ND LINE) "} description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is"} image={photo} />
                        <SmallArticle title={"ARTICLE TITLE ( THE 2ND LINE) "} description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is"} image={photo} />
                    </div>

                </section>

                <div className={styles.buttonWrapper}>
                    <Button onClick={showMoreHandler}>
                        SHOW MORE
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default ArticlesGrid;