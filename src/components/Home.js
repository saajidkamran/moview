import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./home.css";

export default function Home() {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:3000/moview/api");
      setMovieDetail(request.data.data.foundAticles);
      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="home">
      <Banner />
      {movieDetail.map((c) => {
        return <Card key={c._id} title={c.title} content={c.content} />;
      })}
    </div>
  );
}
