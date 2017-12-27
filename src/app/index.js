import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLink(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            name={"Rahul"}
                            initialAge={27}
                            greet={this.onGreet}
                            link={this.onChangeLink.bind(this)}
                            linkName={this.state.homeLink}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));