/* eslint-disable react/jsx-key */ 
import React, { useState, useEffect } from 'react' 
import ReactDOM from 'react-dom';    
import axios from 'axios' 
import NewsItem from './NewsItem' 
 
const NewsList = () => { 
    const [articles, setArticles] = useState([]) 
 
    useEffect(() => { 
        const getArticles = async () => { 
            const response = await axios.get("https://newsapi.org/v2/everything?q=cannes&apiKey=18b82b1c1fe140c3ba3f998077bc3457") 
            console.log(response) 
            setArticles(response.data.articles) 
    } 
    getArticles()    
},[]) 
 
    return ( 
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">   
            {articles.map(article => { 
                return ( 
                    <NewsItem 
                      title ={article.title} 
                      description = {article.description} 
                      url={article.url} 
                      urlToImage={article.urlToImage} 
                    /> 
                ) 
            })} 
        </div> 
    ) 
} 
 
 
export default NewsList