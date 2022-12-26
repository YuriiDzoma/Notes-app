import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styles from "./CreateNote.module.scss";
import {Link} from "react-router-dom";

const CreateNewNote = () => {
    return (

        <Link to={'/create/'}>
            <div className={styles.createNote}>
                <Fab color="primary" aria-label="add" size="small">
                    <AddIcon/>
                </Fab>
            </div>
        </Link>

    )
}

export default CreateNewNote