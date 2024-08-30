import { NavLink } from "react-router-dom";
import styles from "./section-navigation.module.css"
import { memo } from "react";

const SectionNavigation = () => (<>
    <NavLink to="/top-news" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>TOP NEWS</NavLink>
    <NavLink to="/fashion" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>FASHION</NavLink>
    <NavLink to="/art" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>ART</NavLink>
    <NavLink to="/beauty" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>BEAUTY</NavLink>
    <NavLink to="/social" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>SOCIAL</NavLink>
    <NavLink to="/creative" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>CREATIVE</NavLink>
    <NavLink to="/events" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>EVENTS</NavLink>
</>);

export default memo(SectionNavigation);