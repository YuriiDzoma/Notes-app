import styles from './Header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.headerBox}>
            <div className={styles.title}>
                <span>Notes</span>
            </div>
            <div className={styles.link}>
                <Link to={`/settings/`}>
                    <span>Settings</span>
                </Link>
            </div>
        </div>
    )
}

export default Header