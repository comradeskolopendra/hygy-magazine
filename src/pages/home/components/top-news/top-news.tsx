import { FC } from "react";
import { BASE_URL } from "../../../../constants";
import Article from "./article/article";
import styles from "./top-news.module.css";
import Button from "../../../../components/button/button";

import photo from "../../../../assets/images/griefs.jpg";

interface TopNewsProps {
    name: string;
}

const TopNews: FC<TopNewsProps> = ({ name }) => {

    return (
        <section className={styles.topNews} id="top-news">

            <h2 className={styles.articlesTitle}>{name}</h2>
            <div className={styles.contentWrapper}>
                <section className={styles.articles}>
                    {[1, 2, 3, 4].map(() =>
                        <Article
                            title={"ARTICLE TITLE (THE 2ND LINE) "}
                            image={photo}
                            description="Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is almost always some variation of ‘skiNNy JeAnS’.  "
                        />
                    )}
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

export default TopNews;