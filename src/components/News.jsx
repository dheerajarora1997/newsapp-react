import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Pagination from './Pagination';
import PropTypes from 'prop-types'



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

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
    }

    async updateNews(pageNo) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true })

        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    prevClickHandle = async () => {
        this.setState({
            page: this.state.page - 1,
        });
        this.updateNews();
    }

    nextClickHandle = async () => {
        this.setState({
            page: this.state.page + 1,
        });
        this.updateNews();
    }
    render() {
        return (
            <div className="container" >
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="my-4">Top Headlines</h2>
                    <div className="">Total Available Post : <span className="badge bg-secondary rounded-pill">{this.state.totalArticles}</span></div>
                </div>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <NewsItem title={element.title} description={element.description ? element.description.slice(0, 100) : ''} imgUrl={element.urlToImage || 'https://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400.jpg'} newsUrl={element.url || ' '} author={element.author} publishedAt={element.publishedAt || ''} source={element.source.name} />
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-sm btn-dark" disabled={this.state.page == 1} onClick={this.prevClickHandle}>Previous</button>
                    <Pagination page={this.state.page} totalArticles={this.state.totalArticles} pageSize={this.props.pageSize} />
                    <button className="btn btn-sm btn-dark" disabled={(this.state.page >= Math.ceil(this.state.totalArticles / this.props.pageSize) ? true : false)} onClick={this.nextClickHandle}>Next</button>
                </div>
            </div>
        )
    }
}
