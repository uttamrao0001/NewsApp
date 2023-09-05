import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        const { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className='my-3'>
                <div className="card border-0 shadow">
                    <img src={imageUrl} className="card-img-top" alt="News" />
                    <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger" style={{ padding: '10px' }}>
                        {source}
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description.length > 120 ? description.slice(0, 120) + "..." : description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="card-text mb-0">
                                <small className="text-muted font-italic">By {author}</small>
                            </p>
                            <p className="card-text mb-0">
                                <small className="text-muted">{new Date(date).toUTCString()}</small>
                            </p>
                        </div>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-info mt-2">
                            Read more<span className="custom-arrow-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
