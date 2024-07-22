import { FC } from "react";
import styles from "./header.module.css";

import { HashLink } from "react-router-hash-link";
import search from "../../assets/images/search.png";

const Header: FC = () => {

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.titleName}>
                    <span className={styles.hygy}>
                        HYGY
                    </span>
                    <span className={styles.magazine}>
                        MAGAZINE
                    </span>
                </h1>

                <div className={styles.search}>
                    <input className={styles.searchInput} type="text" />
                    <button className={styles.searchButton}>
                        <img src={search} alt="" />
                    </button>
                </div>
            </header>
            <nav className={styles.navigation}>
                <div className={styles.navContents}>
                    <HashLink to="#top-news" className={styles.navLink}>TOP NEWS</HashLink>
                    <HashLink to="#art" className={styles.navLink}>ART</HashLink>
                    <HashLink to="#fashion" className={styles.navLink}>FASHION</HashLink>
                    <HashLink to="#beauty" className={styles.navLink}>BEAUTY</HashLink>
                    <HashLink to="#social" className={styles.navLink}>SOCIAL</HashLink>
                    <HashLink to="#creative" className={styles.navLink}>CREATIVE</HashLink>
                    <HashLink to="#events" className={styles.navLink}>EVENTS</HashLink>
                </div>
            </nav>
        </>
    )
};

export default Header;