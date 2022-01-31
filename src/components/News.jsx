import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News  = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [totalArticles, setTotalArticles] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        props.setProgress(30);

        let data = await fetch(url);
        let parseData = await data.json();

        props.setProgress(60);

        setArticles(parseData.articles);
        setTotalArticles(parseData.totalResults)
        setPage(page)
        props.setProgress(100);
    }

    useEffect(() => {
        window.document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
        updateNews();
    }, [])

    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

        let data = await fetch(url);
        let parseData = await data.json();

        setArticles(articles.concat(parseData.articles))
        setTotalArticles(parseData.totalResults)

        setPage(page + 1)

    };


        return (
            <>
                <div className="container" >
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="my-4">New App - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                        <div className="">Total Available Post : <span className="badge bg-secondary rounded-pill">{totalArticles}</span></div>
                    </div>
                </div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length != totalArticles}
                    loader={articles.length != totalArticles ? <Spinner /> : false}
                    endMessage={ totalArticles != 0 ?
                        <p className="text-center">
                            <b>Yay! <br />You have seen it all</b>
                        </p>
                        :
                        <Spinner />
                    }
                >
                    <div className="container pt-3">
                        <div className="row no-gutters">
                            {articles.map((element, index) => {
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

News.defaultProps = {
    // country: 'US',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string
}
export default News;