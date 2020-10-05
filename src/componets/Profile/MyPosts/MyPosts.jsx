import React from "react";
import b from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {




    let postsElement = MyPosts.map(p=>  <Post message={p.messages} likesCount={p.likesCount}/>);

    return <div className={b.postBlock}>
        <h3>My post</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
            <div><button>Add post</button>
                </div>

            </div>

            <div className={b.posts}>


                {postsElement}



            </div>
    </div>;
}
export default MyPosts