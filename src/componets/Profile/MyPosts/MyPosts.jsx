import React from "react";
import b from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.post.map
    (p =>  <Post message={p.messages}
                 likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () =>  {

        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value=" "
    }




    return <div className={b.postBlock}>
        <h3>My post</h3>
            <div>
                <div>
                <textarea ref={newPostElement}></textarea>
                </div>
            <div><button onClick={  addPost}>Add post</button>
                </div>

            </div>

            <div className={b.posts}>


                {postsElement}



            </div>
    </div>;
}
export default MyPosts