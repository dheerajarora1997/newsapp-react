import React, { Component,  useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Pagination from './Pagination';
import PropTypes from 'prop-types';

const NewsWithBtn = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [totalArticles, setTotalArticles] = useState(0);
    const [loading, setLoading] = useState(false);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        console.log(page)
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        setLoading(true)

        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults)
        setLoading(false)
        setPage(page)
        props.setProgress(100);
    }

    useEffect(() => {
        window.document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
        updateNews();
    }, [page, props.category]);


    const prevClickHandle = () => {
        setPage(page - 1)
    }

    const nextClickHandle = () => {
        setPage(page + 1)
    }

    return (
        <div className="container" >
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="my-4">New App - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                <div className="">Total Available Post : <span className="badge bg-secondary rounded-pill">{totalResults}</span></div>
            </div>
            {loading && <Spinner />}
            <div className="container">

                <p className="">{page} | {articles.length} | {totalResults}</p>
                <div className="row">
                    {!loading && articles.map((element, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <NewsItem title={element.title} description={element.description ? element.description.slice(0, 100) : ''} imgUrl={element.urlToImage || 'https://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400.jpg'} newsUrl={element.url || ' '} author={element.author} publishedAt={element.publishedAt || ''} source={element.source.name} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-sm btn-dark" disabled={page === 1} onClick={prevClickHandle}>Previous</button>
                <Pagination page={page} totalArticles={totalResults} pageSize={props.pageSize} />
                <button className="btn btn-sm btn-dark" disabled={(page >= Math.ceil(totalResults / props.pageSize) ? true : false)} onClick={nextClickHandle}>Next</button>
            </div>
        </div>
    )
}



NewsWithBtn.defaultProps = {
    // country: 'US',
}

NewsWithBtn.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string
}
export default NewsWithBtn;