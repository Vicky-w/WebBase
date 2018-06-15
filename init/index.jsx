import React from 'react';
import Login from '../include/login';
import '../css/styles.css'

class Index extends React.Component {
    state = {}

    componentWillMount() {
        console.log("index   =>componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <div className="wrapper">
                    <div className="container">
                        <h1 style={{marginTop:-30,marginBottom:10}}>Base</h1>
                        <Login/>
                    </div>
                    <ul className="bg-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

        );
    }
}

module.exports = Index;

