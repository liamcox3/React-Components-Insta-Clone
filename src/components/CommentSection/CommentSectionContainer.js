// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../dummy-data";

const CommentSection = (props) => {
    // Add state for the comments
    const [comment] = useState(props.comments);

    return (
        <div>
            {comment.map((item) => (
                <Comment comment={item} />
            ))}
            <CommentInput />
        </div>
    );
};

export default CommentSection;
