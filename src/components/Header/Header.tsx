import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import { FiSettings } from "react-icons/fi";

const Header = () => {
    return (
        <div className={styles.headerBox}>
            <div className={styles.title}>
                <span>Notes</span>
            </div>
            <div className={styles.link}>
                <Link to={`/settings/`}>
                    <div style={{fontSize: '20px'}}><FiSettings /></div>
                </Link>
            </div>
        </div>
    )
}

export default Header