import React from "react";
import b from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>

            <div className={b.posts}>


                    <Post message= "Hi, how are you?" likesCount="10"/>
                    <Post message= "It's my first post" likesCount="5" />



            </div>
    </div>;
}
export default MyPosts