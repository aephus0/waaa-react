import React, { useState } from "react";
import "./styles.css";
const url = "https://aniliapi.herokuapp.com/";
const App = () => {
  const [animes, setAnimes] = useState([]);
  fetch(url + "anime", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setAnimes(data);
    });
  return (
    <>
      {" "}
      {animes.map((anime) => (
        <AnimeInfo
          title={anime.title}
          description={anime.description}
          releasedate={anime.releasedate}
          aniId={anime.aniId}
        />
      ))}
    </>
  );
};

const AnimeInfo = (props) => {
  const [showAniId, setAniId] = useState(false);

  return (
    <div className="aniEntry">
      <img src="https://cdn.lewd.host/8quWjaxx.png" alt="anime"></img>
      <div className="aniDetails">
        <p>Title: {props.title}</p>
        <p>Description: {props.description}</p>
        <p>Release date: {props.releasedate}</p>
        <button onClick={() => setAniId(!showAniId)}>Toggle aniId</button>
        {showAniId && <p>aniID: {props.aniId}</p>}
      </div>
    </div>
  );
};

const fetchData = async (url, data = {}) => {
  const response = await fetch(url + "anime", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

console.log(
  fetchData(url).then((data) => {
    const anidata = data;
    return anidata;
  })
);

export default App;
