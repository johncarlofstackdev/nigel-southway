import Link from "next/link";
import Image from "next/image";

interface sideBarProps {
    styles: any;
    isOpen: boolean;
    nav: (isOpen: boolean) => void;
};

const Overlay: React.FC<sideBarProps> = ({ styles, nav, isOpen }) => {
    const handleCloseOpenNav = () => {
        nav(false);
    }
    return isOpen ? <div className={styles.overlay} onClick={handleCloseOpenNav}></div> : null;
}

export default Overlay;