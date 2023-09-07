"use client";
import React from "react";
import { Search, Menu } from "@/const/svgs";

interface TopBarProps {
    styles: any;
    nav: (isOpen: boolean) => void;
};

const TopBar: React.FC<TopBarProps> = ({ styles, nav }) => {
    const handleOpenNav = () => {
        nav(true);
    }

    return (
        <div className={styles.bar}>
            <div>
                <div className={styles.logo}>
                    <h1>TAKE BACK MANUFACTURING</h1>
                    <span>An Imperative for Western Economies</span>
                </div>
                <div className={styles["nav-btn"]}>
                    <button className={styles.menu} onClick={handleOpenNav}>{Menu}</button>
                </div>
            </div>
            <div className={styles.search}>
                <i className={styles.icon}>{Search}</i>
                <input type="text" placeholder="Write Something..." />
            </div>
        </div>
    );
}

export default TopBar;