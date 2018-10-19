import React, { Component } from 'react';
import { ReactComponent as Logo} from '../../logo.svg';
import { Link } from 'react-router-dom';

class AppError extends Component {
    render() {
        return (
            <div id="app-error">
                <h2>{this.props.children}</h2>
                <Link to="/" className="main-button"><Logo /> Go to the Home Page</Link>
            </div>
        );
    }
}

export default AppError;