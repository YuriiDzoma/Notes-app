import styles from './Settings.module.scss'
import {Link} from "react-router-dom";


const Settings = () => {
    return (
        <div className={styles.settingsContainer}>

            <div  className={styles.toBack}>
                <Link to={'/'}><span>back</span></Link>
            </div>

            <div className={styles.setting}>
                <span>Settings</span>
            </div>

        </div>
    )
}

export default Settings