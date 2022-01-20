import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, publishedAt, author, source } = this.props
        return (
            <div className="card w-100 mb-4 border-0 shadow">
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary shadow fw-normal">
                    {source}
                </span>
                <div className="card-img d-flex justify-content-center align-items-center">
                    <img src={imgUrl} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{ minHeight: '55px' }} title={title}>{title ? title : 'No Title Available'}</h5>
                    <p className="card-text text-break" style={{ minHeight: '80px' }}>{description}{description ? '...' : 'No Content Available'}</p>
                    <div className="d-flex align-items-center mb-3">
                        <small className="text-end d-inline-block w-100">By : <span className="text-muted">{author != null ? author : 'No User Available'}</span></small>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <small className="text-end d-inline-block">{new Date(publishedAt).toGMTString()}</small>
                        <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
