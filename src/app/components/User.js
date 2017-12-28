import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";

export class User extends React.Component {

    onNavigate() {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.match.params.id}</p>
                <button className="btn btn-primary" onClick={this.onNavigate.bind(this)}>Navigate to Home</button>
            </div>
        );
    }
}

User.propTypes = {
    history: ReactRouterPropTypes.history.isRequired
};