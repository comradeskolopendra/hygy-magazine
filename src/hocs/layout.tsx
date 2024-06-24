import { FC, ReactNode } from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

interface LayoutProps {
    isNeedHeader?: boolean;
    isNeedFooter?: boolean;
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ isNeedFooter = false, isNeedHeader = false, children }) => {
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