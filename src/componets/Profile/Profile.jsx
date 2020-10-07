import React from "react";
import b from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div >
        <ProfileInfo/>
        <MyPosts post ={props.state.post} addPost={props.addPost}/>

    </div>;
}
export default Profile