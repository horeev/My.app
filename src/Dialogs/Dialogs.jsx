import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialogs + s.active}>
        <NavLink to={"/messager/" + props.id}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.dialogs}>{props.message}</div>
}
const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta",},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera",}]

    let messages = [
        {id: 1, messages: "How is your health! "},
        {id: 2, messages: "Hi! "},
        {id: 3, messages: "Yo! ",},
        {id: 4, messages: "Yo! 1"},
        {id: 5, messages: "Yo! 2"},
        {id: 6, messages: "Yo! 3",}]


    let dialogesElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.messages}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogesElements}
            </div>
            <div className={s.messager}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;