import "./App.css";
import Login from "../login/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "../spotify-logic/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../Player/Player";
import { useStateProviderValue } from "../../StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    } else {
      console.log("token is null");
    }
    console.log(user);
    window.location.hash = "";
  }, [setToken]);

  return (
    // using BEM conventions
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* <Login /> */}
      <footer className="app-footer"> Copyright @ 2022 Cipher</footer>
    </div>
  );
}

export default App;
