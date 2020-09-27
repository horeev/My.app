import React from "react";
import classes from "./Navbar.module.css";

const Navbar =()=> {
    return < nav className={classes.nav}>
        <div className={classes.item}>
            <a>Profile</a>
        </div>
        <div className={classes.item}>
            <a>Messager</a>
        </div>
        <div className={classes.item}>
            <a>News</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Main content</a>
        </div>
    </nav>
}
export default Navbar