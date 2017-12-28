import React from "react";
import {NavLink} from "react-router-dom";

//refactored to stateless component
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink to={"/home"} activeStyle={{color:"red"}}>Home</NavLink></li>
                        <li><NavLink to={"/user/10"} activeStyle={{color:"red"}}>User</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

/*
export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
*/