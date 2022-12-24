import styles from './Header.module.scss'

const Header = (props) => {
    return (
        <div className={styles.headerBox}>
            <div>
                <span>Notes</span>
            </div>
            <div>
                <span>Settings</span>
            </div>
        </div>
    )
}

export default Header