import React from "react";
import b from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPos from "../../index";

const Profile = (props) => {
    return <div >
        <ProfileInfo/>
        <MyPosts posts ={props.post}/>

    </div>;
}
export default Profile