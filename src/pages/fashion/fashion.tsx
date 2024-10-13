import Layout from "../../hocs/layout";
import FashionArticles from "./fashion-articles/fashion-articles";
import styles from "./fashion.module.css";
import RedLine from "./red-line/red-line";

import FashionSwiper from "./fashion-swiper/fashion-swiper";
import FashionReadNext from "./fashion-read-next/fashion-read-next";

import photo from "../../assets/images/griefs.jpg";

const FashionPage = () => {
    return (
        <Layout isNeedFooter isNeedHeader>
            <section className={styles.contents}>
                <RedLine />
                <div className={styles.articles}>
                    <h3 className={styles.heading}>FASHION</h3>
                    <FashionArticles articles={[1, 2, 3]} />
                    <FashionArticles articles={[1, 2]} className={styles.bigArticlesBlock} classNameArticle={styles.bigArticle} />
                    <FashionSwiper />

                    <h3 className={styles.heading} style={{ color: "#D50032" }}>READ NEXT</h3>
                    <section className={styles.readNext}>
                        {[1, 2, 3, 4].map(element => (
                            <FashionReadNext
                                photo={photo}
                                title={"TITLE"}
                                text={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen"}
                            />
                        ))}
                    </section>
                </div>
            </section>
        </Layout>
    )
};

export default FashionPage;