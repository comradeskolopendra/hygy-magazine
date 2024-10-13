import { FC, useCallback } from "react";
import Layout from "../../hocs/layout";
import ArticlesRow from "./components/articles-row/articles-row";
import ArticlesGrid from "./components/articles-grid/articles-grid";
import HeadingImage from "./components/heading-image/heading-image";
import PhotoTiles from "./components/photo-tiles/photo-tiles";

import { artBlock, beautyBlock, eventsBlock, fashionBlock, socialBlock } from "../../mock-data";
import ArticlesBlock from "./components/articles-block/articles-block";
import ArticlesBigRow from "./components/articles-row-big/articles-row-big";
import TopNews from "./components/top-news/top-news";
import { useNavigate } from "react-router";

const HomePage: FC = () => {
    const navigate = useNavigate();

    const handleShowMore = (name: string) => {
        navigate(name)
    };

    return (
        <Layout isNeedHeader isNeedFooter>
            <section>
                <HeadingImage />

                <TopNews name={"Top News"} />
                <ArticlesGrid showMoreHandler={() => handleShowMore("fashion")} name={fashionBlock.name} />
                <ArticlesRow showMoreHandler={() => { handleShowMore("art") }} name={artBlock.name} articles={artBlock.articles} />
                <ArticlesBigRow name={beautyBlock.name} articles={fashionBlock.articles} />
                <ArticlesBlock name={socialBlock.name} articles={socialBlock.articles} />
                <PhotoTiles name={"creative"} tiles={[]} />
                <ArticlesRow showMoreHandler={() => { handleShowMore("events") }} name={eventsBlock.name} articles={eventsBlock.articles} />
            </section>
        </Layout>
    )
};

export default HomePage;