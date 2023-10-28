import React, { Component } from "react";
import AboutItem from "./AboutItem";

export class About extends Component {
  articles = [
    {
      author: "Prince Kumar",
      imageUrl:
        "https://i.ndtvimg.com/i/2017-08/indian-navy-generic_650x400_51502277717.jpg",
      title: "CEO",
      description: "He is CEO in this Website",
    },
    {
      author: "Abhishek Mishra",
      imageUrl:
        "https://i.ndtvimg.com/i/2017-08/indian-navy-generic_650x400_51502277717.jpg",
      title: "Manager",
      description: "He is Manager in this Website",
    },
    {
      author: "Sagar Kumar",
      imageUrl:
        "https://i.ndtvimg.com/i/2017-08/indian-navy-generic_650x400_51502277717.jpg",
      title: "Engineer",
      description: "He is Engineer in this Website",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  render() {
    return (
      <div className="container my-5">
        <h1>GROUP MEMBER</h1>
        <div className="row">
          {this.state.articles.map((val) => {
            return <div className="col-md-4">
              <AboutItem author={val.author} title={val.title} description={val.description} imageUrl={val.imageUrl} />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default About;
