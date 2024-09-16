
import styles from "./fashion-articles.module.css";
import FashionArticle from "./fashion-article/fashion-article";

import photo from "../../../assets/images/griefs.jpg";
import { FC } from "react";

interface FashionArticlesProps {
    articles: number[];
    className?: string;
    classNameArticle?: string;
}

const FashionArticles: FC<FashionArticlesProps> = ({ articles, className = "", classNameArticle = "" }) => {

    return (
        <section className={`${styles.articles} ${className}`}>
            {
                articles.map(element => (
                    <FashionArticle
                        photo={photo}
                        className={classNameArticle}
                        title={"TITLE"}
                        text={"Why do skinny jeans get so much hate?  Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend ...".slice(0, 130)}
                    />
                ))
            }
        </section>
    )
};

export default FashionArticles;