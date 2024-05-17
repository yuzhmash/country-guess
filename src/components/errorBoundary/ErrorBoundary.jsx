import { Component } from "react";
import PropTypes from 'prop-types';

import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(e, r) {
        console.log(e, r)
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
    children: PropTypes.node
};