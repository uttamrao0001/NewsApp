import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import myImage from '../WhatsApp Image 2023-08-30 at 17.10.36.jpg'
import Spinner from './Spinner'

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "sports"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        await this.Doinit();
    }

    async Doinit() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f4382317fc4415c827ce6be2330e007&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    handlePrevClick = () => {
        this.setState(
            { page: this.state.page - 1 },
            () => this.Doinit()
        );
    }

    handleNextClick = () => {
        this.setState(
            { page: this.state.page + 1 },
            () => this.Doinit()
        );
    }

    /* handlePrevClick = () => {
   const callback = this.Doinit;
   this.setState({ page: this.state.page - 1 }, callback);
 }
 
 handleNextClick = () => {
   const callback = this.Doinit;
   this.setState({ page: this.state.page + 1 }, callback);
 } */

    render() {
        return (
            <>
                <div className='container my-3 md-centre'>
                    <h1 className='text-center' style={{ borderBottom: '2px solid #007BFF', paddingBottom: '10px' }}>
                        Todays! top headlines
                    </h1>
                    {/* <h1 className='text-center' style={{ textDecoration: 'underline' }}>
                        Todays! top headlines
                    </h1> */}
                    <div className='text-center'>
                        {this.state.loading && <Spinner />}
                    </div>
                    <div className='row'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : myImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                    <div className="container d-flex justify-content-between" style={{ borderTop: '2px solid #007BFF', marginTop: '10px' }}>
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark my-3" onClick={this.handlePrevClick}>&larr; Prev</button>
                        <button type="button" disabled={this.state.page + 1 > this.state.totalResults / this.props.totalResults} className="btn btn-dark my-3" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>

                </div >
            </>
        )
    }
}

export default News
