import React, { useState } from "react";
const url = "http://localhost:5500/";
const fetchData = async () => {
  await fetch(url + "anime", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      console.log(data);

      return data;
    });
};

console.log(fetchData());

const AnimeInfo = (props) => {
  return fetchData().map((anime) => (
    <AllAnimes
      title={anime.title}
      description={anime.description}
      releasedate={anime.date}
      animeid={anime.aniId}
    />
  ));
};

const AllAnimes = (props) => {
  const [showAniId, setAniId] = useState(false);
  return (
    <div className="aniEntry">
      <img src="https://cdn.lewd.host/8quWjaxx.png" alt="anime"></img>
      <div className="aniDetails">
        <p>
          <AnimeInfo title={props.title} />
        </p>
        <p>Description: {props.description}</p>
        <p>Release date: {props.releasedate}</p>
        <button onClick={() => setAniId(!showAniId)}>Show Anime ID</button>
        {showAniId && <p>Anime ID: {props.animeid}</p>}
      </div>
    </div>
  );
};

export default AllAnimes;
