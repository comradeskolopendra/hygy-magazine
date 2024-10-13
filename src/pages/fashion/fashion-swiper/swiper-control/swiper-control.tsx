import { FC, memo, ReactNode } from "react";
import arrowLeft from "../../../../assets/icons/arrow-left.png";
import arrowRight from "../../../../assets/icons/arrow-right.png";
import styles from "./swiper-control.module.css";

interface SwiperControlProps {
    direction: "next" | "prev";
    handlerClick: () => void;
    disabled: boolean;
}

const SwiperControl: FC<SwiperControlProps> = ({ direction, handlerClick, disabled }) => {

    return (
        <button onClick={handlerClick} disabled={disabled} className={styles.control}>
            {direction === "prev" ?
                <img src={arrowLeft} className={styles.arrow} />
                :
                <img src={arrowRight} className={styles.arrow} />
            }
        </button>
    )
};

export default memo(SwiperControl);