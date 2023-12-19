import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {

    let {author, title, description, imageUrl} = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-author">{author}</h2>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
