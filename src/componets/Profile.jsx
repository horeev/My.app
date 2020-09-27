import React from "react";
import b from "./Profile.module.css";

const Profile = () => {
    return <div className={b.content}>
        <div><img src="https://images.traum-ferienwohnungen.de/236784/8046961/46/villa-paradis-6-at-paradis-resort.jpg"/>
        </div>
        <div>
            ava + discription
        </div>
        <div>
            My post
            <div>
                New Post
            </div>
            <div className={b.posts}>
                <div className={b.item}>
                    Post
                </div>
            </div>
            <div className={b.item}>
                Post2
            </div>

        </div>


    </div>;
}
export default Profile