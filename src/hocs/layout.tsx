import { FC, ReactNode, useEffect } from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useLocation } from "react-router";

import styles from "./layout.module.css";

interface LayoutProps {
    isNeedHeader?: boolean;
    isNeedFooter?: boolean;
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ isNeedFooter = false, isNeedHeader = false, children }) => {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }, 100)
    }, [location.pathname])

    return (
        <>
            {isNeedHeader && <Header />}
            <main className={styles.main}>
                {children}
            </main>
            {isNeedFooter && <Footer />}
        </>
    )
};

export default Layout;