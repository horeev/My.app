import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



let post = [
        {id: 1, messages: "How is your health! ", likesCount: 12},
        {id: 2, messages: "Hi! I'm Fine!", likesCount: 11},
        {id: 3, messages: "Yo! ",},
        {id: 4, messages: "Yo! 1"},
        {id: 5, messages: "Yo! 2"},
        {id: 6, messages: "Yo! 3",}]


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





ReactDOM.render(
  <React.StrictMode>
    <App post={post} dialogs={dialogs} messages={messages}/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
