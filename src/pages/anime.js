import React, { useState, useEffect } from "react";
import Header from "../components/header";
const url = "https://aniliapi.herokuapp.com/";
const { format } = require("date-fns");

export default function Anime() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    fetch(url + "anime", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAnimes(data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-4">
        {animes.map((anime) => (
          <AnimeInfo
            title={anime.title}
            description={anime.description}
            releasedate={format(new Date(anime.date), "dd/MM/yyyy")}
            aniId={anime.aniId}
          />
        ))}
      </div>
    </>
  );
}
const AnimeInfo = (props) => {
  return (
    <div className="flex flex-row flex-nowrap bg-grey-100 border-2 rounded-2x1 p-8 md:p-0 bg-grey-50 my-2 box-content mx-4 overflow-auto">
      <img
        className="w-32 h-32 md:w-64 md:h-full  md:rounded-none rounded-full ml-0  bg-gray-50"
        href="google.se"
        src="https://cdn.lewd.host/qbk23JtA.png"
        alt="anime"
      ></img>

      <div className="bg-grey-50 pt-6 md:p-8 text-center md:text-left space-y-4 md:mx-1">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p className="font-medium">{props.description}</p>
        <div className="font-small">{props.releasedate}</div>
        <div>aniID: {props.aniId}</div>
      </div>
    </div>
  );
};
