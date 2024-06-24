import { FC } from "react";
import Layout from "../../hocs/layout";
import ArticlesBlock from "./components/articles-block/articles-block";
import HeadingImage from "./components/heading-image/heading-image";
import PhotoTiles from "./components/photo-tiles/photo-tiles";

import { artBlock, beautyBlock, eventsBlock, fashionBlock, socialBlock } from "../../mock-data";

const HomePage: FC = () => {
    return (
        <Layout isNeedHeader isNeedFooter>
            <HeadingImage />

            <ArticlesBlock name={artBlock.name} articles={artBlock.articles} />
            <ArticlesBlock name={fashionBlock.name} articles={fashionBlock.articles} />
            <ArticlesBlock name={beautyBlock.name} articles={beautyBlock.articles} />
            <ArticlesBlock name={socialBlock.name} articles={socialBlock.articles} />
            <PhotoTiles name={"creative"} articles={[]} />
            <ArticlesBlock name={eventsBlock.name} articles={eventsBlock.articles} />
        </Layout>
    )
};

export default HomePage;