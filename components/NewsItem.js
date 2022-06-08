/* eslint-disable @next/next/no-img-element */
import React from 'react'

const NewsItem = ({ title, description, url, urlToImage}) => {
  return (
    <div className ="news-app">
      <div className='news-item'>
        <img className='news-img' src={urlToImage} alt={url} />
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default NewsItem