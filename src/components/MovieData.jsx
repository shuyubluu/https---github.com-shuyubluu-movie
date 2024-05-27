// MovieData.js

import React from "react";

function MovieData({ src, alt, title }) {
  return (
    <div className="movie-container">
      <div className="movie-image-container">
        <img className="movie-image" src={src} alt={alt} />
      </div>
      <div className="movie-title">{title}</div>
    </div>
  );
}

export default MovieData;
