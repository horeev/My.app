import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const dialogs = (props) => {

    let dialogesElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message message={m.messages}/>);

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
export default dialogs;