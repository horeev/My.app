import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./componets/Music/Music";
import News from "./componets/News/News";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/messager' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>

                    <Route path='/messager' render={ () => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage}
                        addPost={props.addPost}/>}/>


                        </div>


                            </div>
                            </BrowserRouter>)

                            }


                            export default App;
