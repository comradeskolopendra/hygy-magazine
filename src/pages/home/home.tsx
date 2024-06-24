import { FC } from "react";
import Layout from "../../hocs/layout";
import HeadingImage from "./components/heading-image/heading-image";
import ArticlesSticky from "./components/articles-sticky/articles-sticky";
import PhotoTiles from "./components/photo-tiles/photo-tiles";
import ArticlesBlock from "./components/articles-block/articles-block";

const HomePage: FC = () => {
    return (
        <Layout isNeedHeader isNeedFooter>
            <HeadingImage />

            <ArticlesBlock name={"art"} articles={[]} />
            <ArticlesBlock name={"fashion"} articles={[]} />
            <ArticlesBlock name={"beauty"} articles={[]} />
            <ArticlesBlock name={"social"} articles={[]} />
            <PhotoTiles name={"creative"} articles={[]} />
            <ArticlesBlock name={"events"} articles={[]} />
        </Layout>
    )
};

export default HomePage;