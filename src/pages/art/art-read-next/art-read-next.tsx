import { FC } from "react";
import styles from "./art-read-next.module.css";

interface ArtReadNextProps {
    photo: string;
    text: string;
    title: string;
};

const ArtReadNext: FC<ArtReadNextProps> = ({ text, photo, title }) => {
    return (
        <article className={styles.article}>
            <img src={photo} alt="" className={styles.photo} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text.slice(0, 130)}</p>
        </article>
    )
};

export default ArtReadNext;