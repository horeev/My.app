import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const dialogs = (props) => {

    let dialogesElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.messages}/>);

    let newMessageElement=React.createRef();
    let newMessage= ()=>{
        let newText=newMessageElement.current.value;
        alert (newText);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogesElements}
            </div>
            <div className={s.messager}>
                {messagesElements}
            </div>
            <div><textarea></textarea></div>
            <div>
                <button onClick= {newMessage}> Add Message</button>
                </div>
        </div>
    )
}
export default dialogs;