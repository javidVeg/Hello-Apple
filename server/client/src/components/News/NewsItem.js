import React from 'react'
// import './newsItem.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
                <div className="news-app" key= "id">
                    <div className='news-item'>
                        <img className='news-img' width= "200px" src={urlToImage} alt={urlToImage} />
                        <h3><a href={url}>{title}</a></h3>
                        <p>{description}</p>
                    </div>
                </div>
    )
}

export default NewsItem
