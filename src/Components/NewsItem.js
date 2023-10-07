import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="MY-3">
        <div className="card">
          <div>
            <span
              className=" badge rounded-pill bg-success "
              style={{
                display: "flex",
                justifyContent: " flex-end",
                right: "0",
                position: "absolute",
              }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://images.indianexpress.com/2023/10/HARDIK-PANDYA-ILLUSTRATION-CROP.png"
                : imageUrl
            }
            className="card-img-top"
            style={{ height: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
