import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {

    const updateNews = (pageNo) => {
      console.log(pageNo)
    }

    return (
      <nav aria-label="Page navigation">
        {this.props.page} | {this.props.totalArticles} | {this.props.pageSize}
        <ul className="pagination">
          <li className="page-item active"><a className="page-link" onClick={() => { updateNews(1) }}>1</a></li>
          <li className="page-item"><a className="page-link" onClick={() => { updateNews(2) }}>2</a></li>
          <li className="page-item"><a className="page-link" onClick={() => { updateNews(3) }}>3</a></li>
        </ul>
      </nav>
    )
  }
}
