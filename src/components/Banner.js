import React, { useEffect, useState } from "react";
// import truncate from 'react-truncate';
import axios from "axios";
import "./banner.css";

function Banner() {
  const [movieDetail, setMovieDetail] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=6cd40ef82996ad2a032add7f02e1257e&language=en-US"
      );
      setMovieDetail(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner__Container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}"
      )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_Content">
        <h1 className="content__Title">
          {movieDetail?.title ||
            movieDetail?.name ||
            movieDetail?.original_name}
        </h1>

        <h3 className="banner_description">
          Welcome to explore your views........
          {/* {truncate(movieDetail?.overview, 150)} */}
        </h3>
      </div>
    </div>
  );
}

export default Banner;
