import styles from './Comment.module.scss'
import {CommentProps} from "./Comment.types";
import React from "react";

const Comment:React.FC<CommentProps> = ({author, content, created_at}) => {
    return (
        <div className={styles.commentBox}>
            <div>
                <span>{author}</span>
            </div>
            <div>
                <span>{content}</span>
            </div>
            <div>
                <span>{created_at}</span>
            </div>
        </div>
    )
}

export default Comment