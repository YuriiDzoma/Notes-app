import styles from './Note.module.scss'

const Note = ({note}) => {
    return (
        <div className={styles.note}>
            <div>
                <span>{note.name}</span>
            </div>
        </div>
    )
}

export default Note;