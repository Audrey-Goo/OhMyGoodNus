/* eslint-disable @next/next/no-img-element */ 
import React from 'react' 
 
const NewsItem = ({ title, description, url, urlToImage}) => { 
  return ( 
    // <div className ="news-app"> 
    //   <div className='news-item'> 
<div className="max-w-sm rounded overflow-hidden shadow-lg"> 
        <img className="w-full" src={urlToImage} alt={url} /> 
        <div className="px-6 py-4"> 
        <div className="font-bold text-xl mb-2">{title}</div> 
        <p className="text-gray-700 text-base"> 
                {description} 
            </p> 
            <a className="font-bold text-xl mb-2" href={url}> Read more </a> 
        </div> 
        </div> 
 
 
    //   </div> 
    // </div> 
  ) 
} 
 
 
export default NewsItem
