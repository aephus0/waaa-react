import React, { useState } from "react";
import "./styles.css";
const url = "https://aniliapi.herokuapp.com/";
const App = () => {
  return (
    <>
      {" "}
      {}
      <div>
        <form
          action="https://localhost:5500/user/avatar/upload"
          method="post"
          enctype="multipart/form-data"
        >
          <input type="file" name="avatar" />
        </form>
      </div>
      <AnimeInfo
        title="Attack on Titan"
        description="Anime about slaying titans"
        releasedate={Date.now()}
        aniId={1234}
      />
      <AnimeInfo
        title="Attack on Titan Season 2"
        description="Anime about slaying titans once again"
        releasedate={Date.now()}
        aniId={1243}
      />
      <AnimeInfo
        title="Clannad"
        description="An amazing anime about a group of teenagers."
        releasedate={Date.now()}
        aniId={4321}
      />
    </>
  );
};

const AnimeInfo = (props) => {
  const [showAniId, setAniId] = useState(false);
  return (
    <div className="aniEntry">
      <img src="https://cdn.lewd.host/nhGyUn4L.png" alt="anime"></img>
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
