import React from "react";
import b from "./Post.module.css";

const Post = (props) => {
    console.log(props.message);

    return <div className={b.item}>
                    <img src="https://ak.picdn.net/contributors/3359672/avatars/thumb.jpg"/>
        {props.message}
        <div>
        <span>Like</span> {props.likesCount}
            <div>
        <span>Dislike</span>
                </div>
    </div>
                </div>;
}
export default Post