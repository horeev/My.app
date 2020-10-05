import React from "react";
import b from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData =[
        {id:1, messages:"How is your health! ", likesCount:12},
        {id:2, messages:"Hi! I'm Fine!", likesCount: 11},
        {id:3, messages:"Yo! ",},
        {id:4, messages:"Yo! 1"},
        {id:5, messages:"Yo! 2"},
        {id:6, messages:"Yo! 3",}]
    return <div className={b.postBlock}>
            My post
            <div>
                <div>
                <textarea></textarea>
                </div>
            <div><button>Add post</button>
                </div>

            </div>

            <div className={b.posts}>


                    <Post message={postData[0].messages} likesCount={postData[0].likesCount}/>
                    <Post message= {postData[1].messages} likesCount={postData[1].likesCount}/>



            </div>
    </div>;
}
export default MyPosts