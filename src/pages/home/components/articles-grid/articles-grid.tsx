import { FC } from "react";
import styles from "./grid.module.css";

import Button from "../../../../components/button/button";
import Article from "./article/article";
import { BASE_URL, MOCK_IMAGES_ARTICLES } from "../../../../constants";
import SmallArticle from "./small-article/small-article";

import photo from "../../../../assets/images/griefs.jpg";

interface ArticlesGridProps {
    name: string;
}

const ArticlesGrid: FC<ArticlesGridProps> = ({ name }) => {
    return (
        <section id={name} className={styles.articlesInfo}>
            <h2 className={styles.articlesTitle}>{name}</h2>

            <section className={styles.articles}>
                <Article className={styles.big} name={"ARTICLE TITLE ( THE 2ND LINE) "} shortInfo={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is almost always some variation of ‘skiNNy JeAnS’. Thanks to the 60s film and rock stars, the 80s Punk Movement and the Y2K era, skinny jeans have enjoyed extensive popularity."} photo={`${BASE_URL}/${MOCK_IMAGES_ARTICLES[2]}`} />

                <div className={styles.smallArticles}>
                    <SmallArticle title={"ARTICLE TITLE ( THE 2ND LINE) "} description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is almost always some variation of ‘skiNNy JeAnS’."} image={photo} />
                    <SmallArticle title={"ARTICLE TITLE ( THE 2ND LINE) "} description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is almost always some variation of ‘skiNNy JeAnS’."} image={photo} />
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