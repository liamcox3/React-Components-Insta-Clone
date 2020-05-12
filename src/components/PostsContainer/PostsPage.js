//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../dummy-data";

const PostsPage = (props) => {
    const [data] = useState(dummyData);

    return (
        <div className='posts-container-wrapper'>
            {dummyData.map((item) => (
                <Post post={item} />
            ))}
        </div>
    );
};

export default PostsPage;
