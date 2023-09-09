import Link from "next/link";
import Image from "next/image";
import { AUTHOR_NAME } from "@/const/author";

// Incluedes
import Tabs from "./tabs";

interface sideBarProps {
    styles: any;
    nav: (isOpen: boolean) => void;
};

const Sidebar: React.FC<sideBarProps> = ({ styles , nav}) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.author}>
                <Link href="/" onClick={() => nav(false)}>
                    <Image
                        height={50}
                        width={50}
                        alt="Author Profile"
                        src="/images/author.jpg" />
                    <div className={styles.details}>
                        <h3>{AUTHOR_NAME}</h3>
                        <span>The Author</span>
                    </div>               
                </Link>
            </div>
            <div className="label">
                <hr className="hr-horizontal" />
                <span className="title">Navigation</span>
            </div>
            <Tabs styles={styles} nav={nav} />
        </aside>
    );
}

export default Sidebar;