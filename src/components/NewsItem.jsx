import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, publishedAt } = this.props
        return (
            <div className="card w-100 mb-4 border-0 shadow">
                <div className="card-img d-flex justify-content-center align-items-center">
                    <img src={imgUrl} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{ minHeight: '55px'}} title={title}>{title?title.slice(0,25) : ''}{title?'...':' '}</h5>
                    <p className="card-text text-break" style={{ minHeight: '80px' }}>{description}{description?'...':'No Content Available'}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                        <small className="text-end d-inline-block">{publishedAt}</small>
                    </div>
                </div>
            </div>
        )
    }
}
