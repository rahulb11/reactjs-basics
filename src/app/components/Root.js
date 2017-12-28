import React from "react";
import {BrowserRouter, Route, browserHistory} from "react-router-dom";

import {Header} from "./Header";
import {Home} from "./Home";
import {User} from "./User";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <BrowserRouter history={browserHistory}>
                            <div>
                                <Route exact path={"/"} component={Home}/>
                                <Route path={"/home"} component={Home}/>
                                <Route path={"/user"} component={User}/>
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        );
    }
}