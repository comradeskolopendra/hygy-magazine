import { FC } from "react";
import Button from "../../../../components/button/button";
import Article from "./article/article";
import styles from "./articles-row.module.css";
import { BASE_URL } from "../../../../constants";

import photo from "../../../../assets/images/griefs.jpg";

interface ArticlesSpaceProps {
    name: string;
    articles: { shortInfo: string; heading: string; photo: string }[];
}

const ArticlesRow: FC<ArticlesSpaceProps> = ({ name, articles }) => {
    return (
        <section id={name} className={styles.articlesInfo}>
            <h2 className={styles.articlesTitle}>{name}</h2>

            <section className={styles.articles}>
                {articles.map((element, index) => (
                    <Article
                        key={index}
                        heading={"ARTICLE TITLE (THE 2ND LINE) "}
                        photo={photo}
                        shortInfo="Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is almost always some variation of ‘skiNNy JeAnS’.  "
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

export default ArticlesRow;