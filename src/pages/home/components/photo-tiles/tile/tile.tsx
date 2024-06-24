import { FC } from "react";
import articlePhoto from "../../../../../assets/images/article-photo.jpg";
import styles from "./tile.module.css";

interface TileProps {
    photo?: string;
    title?: string;
    info?: string;
}

const Tile: FC<TileProps> = ({ photo, title, info }) => {
    return (
        <article className={styles.tile}>
            <img className={styles.tileImage} src={photo || articlePhoto} alt="" />

            <div className={styles.content}>
                <h2 className={styles.title}>{title || "ARTICLE HEADING"}</h2>
            </div>
        </article>
    )
};

export default Tile;