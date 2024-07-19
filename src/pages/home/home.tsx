import { FC } from "react";
import Layout from "../../hocs/layout";
import ArticlesRow from "./components/articles-row/articles-row";
import ArticlesGrid from "./components/articles-grid/articles-grid";
import HeadingImage from "./components/heading-image/heading-image";
import PhotoTiles from "./components/photo-tiles/photo-tiles";

import { artBlock, beautyBlock, eventsBlock, fashionBlock, socialBlock } from "../../mock-data";
import ArticlesBlock from "./components/articles-block/articles-block";
import ArticlesBigRow from "./components/articles-row-big/articles-row-big";
import TopNews from "./components/top-news/top-news";

const HomePage: FC = () => {
    return (
        <Layout isNeedHeader isNeedFooter>
            <HeadingImage />

            <TopNews name={"Top News"} />
            <ArticlesRow name={artBlock.name} articles={artBlock.articles} />
            <ArticlesBigRow name={fashionBlock.name} articles={fashionBlock.articles} />
            <ArticlesGrid name={beautyBlock.name} />
            <ArticlesBlock name={socialBlock.name} articles={socialBlock.articles} />
            <PhotoTiles name={"creative"} tiles={[]} />
            <ArticlesRow name={eventsBlock.name} articles={eventsBlock.articles} />
        </Layout>
    )
};

export default HomePage;