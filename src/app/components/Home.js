import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.age = props.age;
    }

    makeMeOlder() {
        this.age += 3;
        console.log(this.age);
    }

    render() {
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, your age is {this.age}</p>
                <hr/>
               {/*<button onClick={this.makeMeOlder.bind(this)} className="btn btn-primary">*/}
               <button onClick={() => this.makeMeOlder()} className="btn btn-primary">
                    Make me older!
                </button>
            </div>
        );
    }
}
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};