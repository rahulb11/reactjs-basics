import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.linkName
        };

        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
    }

    makeMeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    changeLink() {
        this.props.link(this.state.homeLink);
    }

    changeInput(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
               <button onClick={() => this.makeMeOlder()} className="btn btn-primary">
                    Make me older!
                </button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">
                    Greet
                </button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.changeInput(event)}/>
                {/*<button onClick={this.changeLink.bind(this)} className="btn btn-primary">*/}
                <button onClick={() => this.changeLink()} className="btn btn-primary">
                    Change Header
                </button>
            </div>
        );
    }
}
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    link: PropTypes.func,
    linkName: PropTypes.string
};