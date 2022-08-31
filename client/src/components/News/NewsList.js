import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import { useSelector } from 'react-redux';
require('dotenv').config({ path: '../../.env' })


const NewsList = () => {
    const [articles, setArticles] = useState([])
    const { post } = useSelector((state) => state.posts);
 
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${post.product}&language=en&pageSize=10&apiKey=fad964fe9bdd46d4b51e69e222dfc50e`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [post.product])
    return (
        <div key= "id">
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList
