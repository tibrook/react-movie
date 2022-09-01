import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
const LikePage = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=da2c3efdb31ac65955ef4b8609f23a24`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);
  return (
    <div className="like-page">
      <Header />
      <h2>
        Coups de coeurs <span>❤️</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment </h2>
        )}
      </div>
    </div>
  );
};

export default LikePage;
