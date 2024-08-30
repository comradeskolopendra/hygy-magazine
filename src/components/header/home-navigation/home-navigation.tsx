import { memo } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./home-navigation.module.css";

const HomeNavigation = () => (
    <>
        <HashLink to="#top-news" className={styles.navLink}>TOP NEWS</HashLink>
        <HashLink to="#fashion" className={styles.navLink}>FASHION</HashLink>
        <HashLink to="#art" className={styles.navLink}>ART</HashLink>
        <HashLink to="#beauty" className={styles.navLink}>BEAUTY</HashLink>
        <HashLink to="#social" className={styles.navLink}>SOCIAL</HashLink>
        <HashLink to="#creative" className={styles.navLink}>CREATIVE</HashLink>
        <HashLink to="#events" className={styles.navLink}>EVENTS</HashLink>
    </>
);

export default memo(HomeNavigation);