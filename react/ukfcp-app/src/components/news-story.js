import React from "react";
import './news-story.css'

const NewsItem = ([author, publishedAt, source, title, url ]) => {



    return (
        <div className="news-app">
            <div className="news-item">

                <p className="news-author">{author}</p>
                <p className="news-published">{publishedAt}</p>
                <p href className="news-source">{source}</p>
                <h2 className="news-title">
                <a href={url} className="news-link">{title}</a></h2>
            </div>
        </div>
    )
}

export default NewsItem
