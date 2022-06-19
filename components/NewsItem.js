/* eslint-disable @next/next/no-img-element */ 
import React from 'react' 
 
const NewsItem = ({ title, description, url, urlToImage}) => { 
  return ( 
    // <div className ="news-app"> 
    //   <div className='news-item'> 
<div className="bg-lightbeige max-w-sm rounded-xl overflow-hidden shadow-lg"> 
        <img className="w-full" src={urlToImage} alt={url} /> 
        <div className="px-6 py-4"> 
        <div className="text-darkestbrown font-bold text-xl mb-2">{title}</div> 
        <p className="text-darkerbrown text-sm"> 
                {description} 
            </p> 
            <a className="text-darkerbrown font-bold text-base mb-2" href={url}> Read more </a> 
        </div> 
        </div> 
 
 
    //   </div> 
    // </div> 
  ) 
} 
 
 
export default NewsItem