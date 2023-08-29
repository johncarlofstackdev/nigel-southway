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

interface tabsProps {
    styles: any;
};

const Tabs: React.FC<tabsProps> = ({ styles }) => {
    return (
        <ul className={styles.nav}>
            <li>
                <Link href="/">
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </i>
                    <span className={styles["item-name"]}>Videos</span>
                    <i className={styles["right-icon"]}>{Arrow}</i>
                </Link>
                <ul className={styles["nav-child"]}>
                    <li>
                        <Link href="/">Introduction</Link>
                    </li>
                    <li>
                        <Link href="/">More</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/">
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faCube} />
                    </i>
                    <span className={styles["item-name"]}>TBM Articles</span>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faFilePdf} />
                    </i>
                    <span className={styles["item-name"]}>Documents</span>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faNewspaper} />
                    </i>
                    <span className={styles["item-name"]}>News</span>
                    <i className={styles["right-icon"]}>{Arrow}</i>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faUserTie} />
                    </i>
                    <span className={styles["item-name"]}>About The Author</span>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </i>
                    <span className={styles["item-name"]}>Book Ordering</span>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className={styles["item-cion"]}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <span className={styles["item-name"]}>Contact</span>
                </Link>
            </li>
            <li>
                <Link href="/">
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