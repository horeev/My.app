
let state= {
    profilePage: {
        post: [
            {id: 1, messages: "POstHow is your health! ", likesCount: 12},
            {id: 2, messages: "POStHi! I'm Fine!", likesCount: 11},
            {id: 3, messages: "Post ",},
            {id: 4, messages: "Post 1"},
            {id: 5, messages: "Post 2"},
            {id: 6, messages: "Post 3",}],

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

export let addPost=(postMessage) => {
    let newPost={
        id:5,
        message: postMessage,
        likesCount:0
    }
    state.profilePage.post.push(newPost);
}

export default state