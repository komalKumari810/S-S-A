import axios from "axios";
import React, { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f2c651288714d2887947f7acf62f3b5"
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          {news.map((val) => {
            return (
              <div className="col my-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">{val.description}</p>
                    <a href="/" class="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
