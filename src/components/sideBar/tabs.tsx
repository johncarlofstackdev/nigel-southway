"use client";
import React, { useState } from "react";
import Link from "next/link";

// aditional Svg's
import { Arrow } from "@/const/svgs";

// FontAwesomes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCube, 
    faFilePdf, 
    faNewspaper, 
    faUserTie, 
    faShoppingBag, 
    faEnvelope,
    faPoll
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { CurrentPath } from "@/components/path";

interface tabsProps {
    styles: any;
    nav: (isOpen: boolean) => void;
};

const Tabs: React.FC<tabsProps> = ({ styles, nav }) => {
    const active = CurrentPath();

    // ==== Videos Child Reference
    const newsChildProperties = ["latest","newsletter"];
    
    // ==== Videos Child Reference
    const videsChildProperties = ["introduction","more"];
    const defaultSetOpenChildNav = videsChildProperties.includes(active) ? "videos" : (newsChildProperties.includes(active) ? "news" : "");

    const [openChildNav, openChildNavSet] = useState(defaultSetOpenChildNav);

    // ==== For Videos Conditions
    const videosConditions = (videsChildProperties.includes(active) || openChildNav === "videos") && openChildNav !== "";

    // ==== Videos Child Reference
    const newsConditions = (newsChildProperties.includes(active) || openChildNav === "news") && openChildNav !== "";

    const handleOpenNavChild = (e: any, type: string) => {
        e.preventDefault();
        
        nav(false);

        if(openChildNav === type){
            return openChildNavSet("");
        }
        
        openChildNavSet(type);
    }

    const handleOpenOtherPage = (type: string) => {
        nav(false);

        if(openChildNav === type){
            return openChildNavSet("");
        }
        
        openChildNavSet(type);
    }

    return (
        <ul className={styles.nav}>
            <li>
                <Link 
                    href="/" className={videosConditions ? styles.active : ""} 
                    onClick={(e) => handleOpenNavChild(e, "videos")}>
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </i>
                    <span className={styles["item-name"]}>Videos</span>
                    <i className={styles["right-icon"]}>{Arrow}</i>
                </Link>
                <ul 
                    className={videosConditions ? styles["open-child"] : styles["nav-child"] }
                    data-max-height="110">
                    <li>
                        <Link 
                            href="/videos/introduction" 
                            className={active === "introduction" ? styles["active-child"] : styles["iactive-child"] }>
                                Introduction
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/videos/more"
                            className={active === "more" ? styles["active-child"] : styles["iactive-child"] }>
                                More
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link 
                    href="/tbm-articles" 
                    className={active === "tbm-articles" ? styles.active : ""} 
                    onClick={(e) => handleOpenOtherPage("tbm-article")}>
                        <i className={styles["item-cion"]}>
                            <FontAwesomeIcon icon={faCube} />
                        </i>
                        <span className={styles["item-name"]}>TBM Articles</span>
                </Link>
            </li>
            <li>
                <Link 
                    href="/documents"
                    className={active === "documents" ? styles.active : ""} 
                    onClick={(e) => handleOpenOtherPage("documents")}>
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faFilePdf} />
                    </i>
                    <span className={styles["item-name"]}>Documents</span>
                </Link>
            </li>
            <li>
                <Link href="/"className={newsConditions ? styles.active : ""} 
                    onClick={(e) => handleOpenNavChild(e, "news")}>
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faNewspaper} />
                    </i>
                    <span className={styles["item-name"]}>News</span>
                    <i className={styles["right-icon"]}>{Arrow}</i>
                </Link>
                <ul 
                    className={newsConditions ? styles["open-child"] : styles["nav-child"] }
                    data-max-height="110">
                    <li>
                        <Link 
                            href="/news/latest" 
                            className={active === "latest" ? styles["active-child"] : styles["iactive-child"] }>
                                Latest
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/news/newsletter"
                            className={active === "newsletter" ? styles["active-child"] : styles["iactive-child"] }>
                                Newsletters
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/about-the-author"
                    className={active === "about-the-author" ? styles.active : ""} 
                    onClick={(e) => handleOpenOtherPage("about-the-author")}>
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faUserTie} />
                    </i>
                    <span className={styles["item-name"]}>About The Author</span>
                </Link>
            </li>
            <li>
                <Link href="/book-ordering"
                    className={active === "book-ordering" ? styles.active : ""} 
                    onClick={(e) => handleOpenOtherPage("book-ordering")}>
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </i>
                    <span className={styles["item-name"]}>Book Ordering</span>
                </Link>
            </li>
            <li>
                <Link href="/contact-us"
                    className={active === "contact-us" ? styles.active : ""} 
                    onClick={(e) => handleOpenOtherPage("contact-us")}>
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <span className={styles["item-name"]}>Contact</span>
                </Link>
            </li>
            <li>
                <Link href="/survey"
                    className={active === "survey" ? styles.active : ""} 
                    onClick={(e) => handleOpenOtherPage("survey")}>
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faPoll} />
                    </i>
                    <span className={styles["item-name"]}>Survey</span>
                </Link>
            </li>
        </ul>
    );
}

export default Tabs;