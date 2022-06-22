import React from "react";
import { loginUrl } from "../spotify-logic/spotify";
import "./login.css";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="Spotify Logo"
      />
      {/* Login button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
