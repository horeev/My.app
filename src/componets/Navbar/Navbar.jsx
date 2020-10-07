import React from "react";
import classes from "./Navbar.module.css";
import b from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        < nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/messager" activeClassName={classes.active}>Messager</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <a>Main content</a>
            </div>
            <div><h3>Friends</h3></div>
            <div className={classes.active}>
                <NavLink to="/music" ><img src="https://ak.picdn.net/contributors/3359672/avatars/thumb.jpg" /></NavLink></div>
        </nav>)
}
export default Navbar