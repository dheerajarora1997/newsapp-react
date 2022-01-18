import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    static defaultProps = {
        country: 'IN',
        pageSize: 9,
        category: 'general',
        apiKey: 'b32d0fd96a86430a96c189b917b72382'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apiKey: PropTypes.string
    }

    articles = []

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
        }
        window.document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
    }

    async componentDidMount() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.props.setProgress(30);
        let data = await fetch(url);
        let parseData = await data.json();

        this.props.setProgress(60);
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            page: this.state.page,
        });
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalArticles: parseData.totalResults,
            page: this.state.page + 1,
        });
    };

    render() {
        return (
            <>
                <div className="container" >
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="my-4">New App - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                        <div className="">Total Available Post : <span className="badge bg-secondary rounded-pill">{this.state.totalArticles}</span></div>
                    </div>
                </div>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length != this.state.totalArticles}
                    loader={this.state.articles.length != this.state.totalArticles ? <Spinner /> : false}
                    endMessage={
                        <p className="text-center">
                            <b>Yay! <br />You have seen it all</b>
                        </p>
                    }
                >
                    <div className="container pt-3">
                        <div className="row no-gutters">
                            {this.state.articles.map((element, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                        <NewsItem title={element.title} description={element.description ? element.description.slice(0, 100) : ''} imgUrl={element.urlToImage || 'https://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400.jpg'} newsUrl={element.url || ' '} author={element.author} publishedAt={element.publishedAt || ''} source={element.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
