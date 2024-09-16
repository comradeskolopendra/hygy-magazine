import { FC } from "react";
import styles from "./fashion-read-next.module.css";

interface FashionReadNextProps {
    photo: string;
    text: string;
    title: string;
};

const FashionReadNext: FC<FashionReadNextProps> = ({ text, photo, title }) => {
    return (
        <article className={styles.article}>
            <img src={photo} alt="" className={styles.photo} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text.slice(0, 130)}</p>
        </article>
    )
};

export default FashionReadNext;