import React from 'react';
import './news-story.css'

const NewsItem = ({title, description, url, publishedAt, content}) => {
    return (
        <div class="row">
            <div class="col">
        <div className="news-app">
            <div className="news-item">

                <h2 className="news-title">
                <a href={url} target="_blank" rel="noreferrer">
                {title}</a></h2>
                <p>{description}</p>
                <p>{content}</p>
                <small>{publishedAt}</small>
            </div>
        </div>
        </div>
        </div>
       
    )
}

export default NewsItem
