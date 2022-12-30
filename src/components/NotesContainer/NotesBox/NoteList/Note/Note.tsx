import styles from './Note.module.scss'
import {Link} from "react-router-dom";
import {NoteProps} from "./Note.types";
import React from "react";
import {useDispatch} from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton} from "@mui/material";
import {deleteNote} from "../../../../../redux/notes-slice";

const Note:React.FC<NoteProps> = ({note}) => {

    const dispatch = useDispatch()

    return (

        <div className={styles.noteContainer}>

            <div className={styles.delete}>
                <IconButton aria-label="delete" color="warning" onClick={() => dispatch(deleteNote(note.id))}>
                    <DeleteIcon />
                </IconButton>
            </div>

            <Link className={styles.link} to={'/' + note.id}>
                <div className={styles.note} >

                    <div>
                        <span>{note.name}</span>
                    </div>

                </div>
            </Link>
        </div>

    )
}

export default Note;