import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './news-story'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://gnews.io/api/v4/search?q=example&token=efdf21ac7b377951ab78e550bf5dea80&lang=en&country=us&max=10')
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
                        description={article.description}
                        publishedAt={article.publishedAt}
                        content={article.content}
                        url={article.url}
                    />
                )
            } )}
        </div>
    )    
}

export default NewsList