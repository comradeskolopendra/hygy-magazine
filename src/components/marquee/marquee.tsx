import { FC, useEffect, useRef } from "react";

import styles from "./marquee.module.css";

const Marquee: FC = () => {

    return (
        <div className={styles.marquee}>
            <span> HYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGYHYGY</span>
        </div>
    )
};

export default Marquee;