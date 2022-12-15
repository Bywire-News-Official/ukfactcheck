import React from 'react';
import './news-story.css'

const NewsItem = ({title, author, url, publishedAt}) => {
    return (
        <div className="news-app">
            <div className="news-item">

                <h2 className="news-title">
                <a href={url} target="_blank" rel="noreferrer">
                {title}</a></h2>
                <p>{author}</p>
                <small>{publishedAt}</small>
            </div>
        </div>
    )
}

export default NewsItem
