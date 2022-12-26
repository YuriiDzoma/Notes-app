import styles from './Settings.module.scss'
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import React from "react";



const Settings = () => {
    return (
        <div className={styles.settingsContainer}>

            <div  className={styles.toBack}>
                <Link to={'/'}>
                    <div>
                        <BiArrowBack size={'28px'} color={'white'} />
                    </div>
                </Link>
            </div>

            <div className={styles.setting}>
                <span>Settings</span>
            </div>

        </div>
    )
}

export default Settings