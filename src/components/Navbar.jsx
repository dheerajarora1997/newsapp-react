import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    Link
} from "react-router-dom";

const modeOpacity = {
    primary: '25',
    warning: '25',
    success: '25',
    danger: '25',
    info: '25',
    light: '100',
    dark: '75',
    secondary: '75',
}

const modeContrast = {
    primary: 'light',
    warning: 'light',
    success: 'light',
    danger: 'light',
    info: 'light',
    light: 'light',
    dark: 'dark',
    secondary: 'dark',
  }

export class Navbar extends Component {

    state = {
        themeMode: 'dark',
    }

    render() {

        const themeMode = (theme) => {
            this.setState({
                themeMode: theme,
            });
            window.document.body.classList.remove('bg-primary','bg-warning','bg-success','bg-danger','bg-info','bg-light','bg-dark','bg-secondary')
            window.document.body.classList.add('bg-opacity-25', 'bg-'+theme);
        }


        return (
            <>
                <nav className={`navbar navbar-expand-lg navbar-${modeContrast[this.state.themeMode]} bg-${this.state.themeMode} bg-opacity-${modeOpacity[this.state.themeMode]}`}>
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
                                <button type="button" onClick={() => { themeMode('primary') }} className="btn rounded bg-primary p-2 ms-3"></button>
                                <button type="button" onClick={() => { themeMode('secondary') }} className="btn rounded bg-secondary p-2 ms-3"></button>
                                <button type="button" onClick={() => { themeMode('danger') }} className="btn rounded bg-danger p-2 ms-3"></button>
                                <button type="button" onClick={() => { themeMode('warning') }} className="btn rounded bg-warning p-2 ms-3"></button>
                                <button type="button" onClick={() => { themeMode('success') }} className="btn rounded bg-success p-2 ms-3"></button>
                                <button type="button" onClick={() => { themeMode('info') }} className="btn rounded bg-info p-2 ms-3"></button>
                                <button type="button" onClick={() => { themeMode('dark') }} className="btn rounded bg-dark p-2 ms-3"></button>
                                <button type="button" onClick={() => { themeMode('light') }} className="btn rounded bg-light p-2 ms-3"></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
