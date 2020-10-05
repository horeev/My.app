import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialogs + s.active}>
        <NavLink to={"/messager/" + props.id}>{props.name}</NavLink>
    </div>
}
export default DialogItem;