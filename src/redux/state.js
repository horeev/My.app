let rerenderEntireTree = () =>{
    console.log("State changed")
}


let state= {
    profilePage: {
        post: [
            {likesCount: 12, id: 1, messages: "POstHow is your health! ", },
            {likesCount: 11, id: 2, messages: "POStHi! I'm Fine!"},



    ],
        newPostText:"Try"

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta",},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera",}],
        messages: [
            {id: 1, messages: "How is your health! "},
            {id: 2, messages: "Hi! "},
            {id: 3, messages: "Yo! ",},
            {id: 4, messages: "Yo! 1"},
            {id: 5, messages: "Yo! 2"},
            {id: 6, messages: "Yo! 3"},
        ]
    },
}
window.state = state;

export let addPost = () => {

    let newPost = {

        likesCount: 1,
        id: 5,
        message: state.profilePage.newPostText,
    }
debugger
    state.profilePage.post.push(newPost);
    state.profilePage.newPostText= " ";
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText)=> {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe=(observer) =>{
     rerenderEntireTree=observer;
}

export default state