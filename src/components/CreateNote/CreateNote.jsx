
import styles from "./CreateNote.module.scss"
import ComeToHome from "../Common/ComeToHome/ComeToHome";

const CreateNote = () => {
    return (
        <div className={styles.createNoteContainer}>

            <ComeToHome />

            <div className={styles.createNoteBox}>
                note
            </div>

        </div>
    )
}

export default CreateNote