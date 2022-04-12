import React from "react";

function Card({ title, image, url }) {
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          className="imgCard"
          width="100%"
          src={image.downsized_medium.url}
          alt={title}
        />
      </a>
    </div>
  );
}
export default Card;
