import { FC } from "react";
import styles from "./heading-image.module.css";

import headingImage from "../../../../assets/images/main-photo.jpg";

const HeadingImage: FC = () => {
    return (
        <section className={styles.container}>
            <picture className={styles.wrapper}>
                <img className={styles.image} src={headingImage} alt="heading image" />
            </picture>
        </section>
    )
};

export default HeadingImage;