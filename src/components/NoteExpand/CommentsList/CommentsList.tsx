import Comment from "./Comment/Comment";
import styles from './CommentsList.module.scss'
import React from "react";
import {CommentsListProps} from "./CommentsList.types";

const CommentsList:React.FC<CommentsListProps> = ({comments}) => {
    return (

        <div className={styles.commentsList}>
            <h2>Comments</h2>

            {comments.map(comment => <Comment key={comment.id}
                                              author={comment.author}
                                              content={comment.content}
                                              created_at={comment.created_at}/>)}
        </div>

    )
}

export default CommentsList