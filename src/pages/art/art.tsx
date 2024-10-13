import Layout from "../../hocs/layout";
import ArtArticle from "./art-article/art-article";
import styles from "./art.module.css";

import photo from "../../assets/images/griefs.jpg";
import ArtReadNext from "./art-read-next/art-read-next";

const ArtPage = () => {

    return (
        <Layout isNeedFooter isNeedHeader>
            <section className={styles.contents}>
                <h2 className={styles.heading}>ART</h2>

                <section className={styles.articles}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(element => (
                        <ArtArticle
                            key={element}
                            text={"Why do skinny jeans get so much hate?  Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the ..."}
                            photo={photo}
                        />
                    ))}
                </section>

                <h2 className={styles.heading}>READ NEXT</h2>

                <section className={styles.readNextArticles}>
                    {[1, 2, 3, 4].map(element => (
                        <ArtReadNext
                            key={element}
                            text={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen ..."}
                            title={"TITLE"}
                            photo={photo}
                        />
                    ))}
                </section>
            </section>
        </Layout>
    )
};

export default ArtPage;