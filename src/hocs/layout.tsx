import { FC, ReactNode, useEffect } from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useLocation } from "react-router";

interface LayoutProps {
    isNeedHeader?: boolean;
    isNeedFooter?: boolean;
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ isNeedFooter = false, isNeedHeader = false, children }) => {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }, 100)
    }, [location.pathname])

    return (
        <>
            {isNeedHeader && <Header />}
            <main>
                {children}
            </main>
            {isNeedFooter && <Footer />}
        </>
    )
};

export default Layout;