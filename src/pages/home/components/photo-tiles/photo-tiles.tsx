import { FC } from "react";
import Button from "../../../../components/button/button";
import styles from "./photo-tiles.module.css";

import Tile from "./tile/tile";

interface ArticlesTilesProps {
    name: string;
    articles: any[];
}

const ArticlesTiles: FC<ArticlesTilesProps> = ({ name, articles }) => {
    return (
        <section className={styles.tilesInfo} id={name}>
            <h2 className={styles.tilesTitle}>{name}</h2>

            <section className={styles.tiles}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                    <Tile />
                ))}
            </section>
        </section>
    )
};

export default ArticlesTiles;