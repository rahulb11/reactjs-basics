import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, browserHistory, NavLink} from "react-router-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {User} from "./components/User";

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <div className="container">
                    <div className="row">
                        <div className="xs-col-10 xs-col-offset-1">
                            <Header/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="xs-col-10 xs-col-offset-1">
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/home"} component={Home}/>
                            <Route path={"/user/:id"} component={User}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

render(<App/>, window.document.getElementById("app"));

/*
Helpful link:
https://gist.github.com/MrJadaml/f51245391fbffbc4d4e1bbdc9ee1d194
*/