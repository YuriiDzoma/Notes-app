import styles from './Settings.module.scss'
import React from "react";
import ComeToHome from "../Common/ComeToHome/ComeToHome";



const Settings = () => {

    return (

        <div className={styles.settingsContainer}>

            <ComeToHome />

            <div className={styles.setting}>
                <span>Settings</span>
            </div>

        </div>
    )
}

export default Settings