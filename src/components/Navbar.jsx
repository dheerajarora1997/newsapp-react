import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">News App</a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex justify-content-between ms-auto">
                            <button type="button" className="btn rounded bg-danger p-3 ms-3"></button>
                            <button type="button" className="btn rounded bg-warning p-3 ms-3"></button>
                            <button type="button" className="btn rounded bg-success p-3 ms-3"></button>
                            <button type="button" className="btn rounded bg-info p-3 ms-3"></button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
