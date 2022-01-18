import React, { Component } from 'react'

export default class InfiniteScroll extends Component {
  render() {
    return (
      {/* <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length != this.state.totalArticles}
                        loader={<Spinner />}
                    >
                        <div className="row">
                            {this.state.articles.map((element, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                        <NewsItem title={element.title} description={element.description ? element.description.slice(0, 100) : ''} imgUrl={element.urlToImage || 'https://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400.jpg'} newsUrl={element.url || ' '} author={element.author} publishedAt={element.publishedAt || ''} source={element.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </InfiniteScroll> */}
    )
  }
}
