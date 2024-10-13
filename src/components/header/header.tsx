import { FC, useMemo, useRef, useState } from "react";
import styles from "./header.module.css";

import { useLocation } from "react-router";
import search from "../../assets/images/search.png";
import HomeNavigation from "./home-navigation/home-navigation";
import SectionNavigation from "./section-navigation/section-navigation";
import { Link } from "react-router-dom";

const Header: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const location = useLocation();
    const [isInputActive, setIsInputActive] = useState<boolean>(false);

    const handleChangeActive = () => {
        setIsInputActive(prevState => {
            if (!prevState) {
                inputRef.current?.focus();
            }

            return !prevState;
        });
    };

    const Navigation = useMemo(() => {
        return location.pathname === "/" ? HomeNavigation : SectionNavigation;
    }, [location.pathname])

    return (
        <>
            <header className={styles.header}>
                <Link to={"/"} className={styles.titleName}>
                    <span className={styles.hygy}>
                        HYGY
                    </span>
                    <span className={styles.magazine}>
                        MAGAZINE
                    </span>
                </Link>

                <div className={styles.search}>
                    <input ref={inputRef} className={`${styles.searchInput}  ${isInputActive ? styles.activeSearchInput : ""}`} type="text" />
                    <button className={styles.searchButton} onClick={handleChangeActive}>
                        <img src={search} alt="" />
                    </button>
                </div>
            </header>

            <nav className={styles.navigation}>
                <div className={styles.navContents}>
                    <Navigation />
                </div>
            </nav>
        </>
    )
};

export default Header;