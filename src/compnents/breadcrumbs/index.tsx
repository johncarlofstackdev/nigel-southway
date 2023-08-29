
interface breadcrumbsProps {
    styles: any
};

const Breadcrumbs: React.FC<breadcrumbsProps> = ({ styles }) => {
    return (
        <div className={styles.breadcrumbs}>
            TEST
        </div>
    );
}

export default Breadcrumbs;