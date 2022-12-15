import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './news-story'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?domains=techcrunch.com&apiKey=92b627a1012f4b6e9d8fa2025aee3f7d')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])

    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem 
                        title={article.title}
                        author={article.author}
                        publishedAt={article.publishedAt}
                        source={article.source}
                        url={article.url}
                    />
                )
            } )}
        </div>
    )    
}

export default NewsList