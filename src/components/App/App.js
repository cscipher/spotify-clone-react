import "./App.css";
import Login from "../login/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "../spotify-logic/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    } else {
      console.log("token is null");
    }

    window.location.hash = "";
  }, [setToken]);

  return (
    // using BEM conventions
    <div className="app">
      {/* {token ? <Player /> : <Login />} */}
      <Login />
      <footer className="app-footer"> Copyright @ 2022 Cipher</footer>
    </div>
  );
}

export default App;
