import styles from "./ComeToHome.module.scss";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import React from "react";


const ComeToHome = () => {
    return (

        <div  className={styles.toBack}>
            <Link to={'/'}>
                <div>
                    <BiArrowBack size={'28px'} color={'white'} />
                </div>
            </Link>
        </div>
    )
}

export default ComeToHome