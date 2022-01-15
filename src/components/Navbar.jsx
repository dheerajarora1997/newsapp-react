import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    Link
} from "react-router-dom";

export class Navbar extends Component {

    static propTypes = {
        themeMode: PropTypes.string,

    }

    themeMode = (theme) => {
        this.setState({
            themeMode: theme
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">News App</Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-between ms-auto">
                            <button type="button" onClick={() => { this.state.themeMode('danger') }} className="btn rounded bg-danger p-2 ms-3"></button>
                            <button type="button" onClick={() => { this.state.themeMode('warning') }} className="btn rounded bg-warning p-2 ms-3"></button>
                            <button type="button" onClick={() => { this.state.themeMode('success') }} className="btn rounded bg-success p-2 ms-3"></button>
                            <button type="button" onClick={() => { this.state.themeMode('info') }} className="btn rounded bg-info p-2 ms-3"></button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
