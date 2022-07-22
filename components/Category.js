import { current } from "daisyui/src/colors";
import Image from "next/image";
import React, { useState } from "react";
import Categories from "./Categories";
import { Link } from 'react-router-dom'

const Category = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) =>{
    const result=Categories.filter((curData)=>{
        return curData.category===catItem;
    });
    setData(result)
  }
  return (
    <>
      <h1 className="shop-header">Oh My Goodnus</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="shop-button" onClick={() => filterResult('Men Tops')}>Men Tops</button>
            <button className="shop-button" onClick={() => filterResult('Men Bottoms')}>Men Bottoms</button>
            <button className="shop-button" onClick={() => filterResult('Men Footwear')}>Men Footwear</button>
            <button className="shop-button" onClick={() => filterResult('Men Accessories')}>Men Accessories</button>
            <button className="shop-button" onClick={() => filterResult('Men Headwear')}>Men Headwear</button>
            <button className="shop-button" onClick={() => filterResult('Women Tops')}>Women Tops</button>
            <button className="shop-button" onClick={() => filterResult('Women Bottoms')}>Women Bottoms</button>
            <button className="shop-button" onClick={() => filterResult('Women Footwear')}>Women Footwear</button>
            <button className="shop-button" onClick={() => filterResult('Women Accessories')}>Women Accessories</button>
            <button className="shop-button" onClick={() => filterResult('Women Headwear')}>Women Headwear</button>
            <button className="shop-button" onClick={() => filterResult('Women Bag')}>Women Bag</button>
            <button className="shop-button" onClick={() => setData(Categories)}>All</button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const { id, title, Theme, image, text, link } = values;
                return (
                  <>
                    <div className="col-md-4 mb-4" key={id}>
                    <div className="card h-100">
                    <div className="card">
                        <Image
                          src={image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p>Theme: {Theme}</p>
                          <p className="card-text">
                            {text}
                          </p>
                          <a href={link}>
                            <button className="shopnow-button">Shop now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
