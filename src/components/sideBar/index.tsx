import Image from "next/image";
import { AUTHOR_NAME } from "@/const/author";

// Incluedes
import Tabs from "./tabs";

interface sideBarProps {
    styles: any;
};

const Sidebar: React.FC<sideBarProps> = ({ styles }) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.author}>
                <Image
                    height={50}
                    width={50}
                    alt="Author Profile"
                    src="/images/author.jpg" />
                <div className={styles.details}>
                    <h3>{AUTHOR_NAME}</h3>
                    <span>The Author</span>
                </div>
            </div>
            <div className="label">
                <hr className="hr-horizontal" />
                <span className="title">Navigation</span>
            </div>
            <Tabs styles={styles} />
        </aside>
    );
}

export default Sidebar;