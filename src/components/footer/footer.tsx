import { Link, useLocation } from "react-router-dom";
import styles from "./footer.module.css";

import yt from "../../assets/images/socials/yt.png";
import inst from "../../assets/images/socials/inst.png";
import lnkd from "../../assets/images/socials/lnkd.png";
import Marquee from "../marquee/marquee";

const Footer = () => {
    const location = useLocation();

    return (
        <footer>
            {location.pathname === "/" && <Marquee />}
            <section className={styles.contents}>
                <div className={styles.socialNetworks}>
                    <img src={yt} alt="" />
                    <img src={inst} alt="" />
                    <img src={lnkd} alt="" />
                </div>

                <div className={styles.externalLinks}>
                    <Link to={"/career"}>career</Link>
                    <Link to={"/contacts"}>contacts</Link>
                    <Link to={"/about-us"}>about us</Link>
                    <Link to={"/privacy-policy"}>privacy policy</Link>
                </div>
            </section>
        </footer>
    )
};

export default Footer;