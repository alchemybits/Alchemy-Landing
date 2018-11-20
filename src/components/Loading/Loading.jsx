import "./Loading.css";
import React from "react";

function template() {
  return (
    <div className="loading">
      <a href="/" className="logo" />
      <article className="wwdc">
        <span className="spin span">
          <div className="large circle one" />
          <div className="large circle two" />
          <div className="large circle three" />
          <div className="large circle four" />
          <div className="large circle five" />
          <div className="large circle six" />
          <div className="large circle seven" />
          <div className="large circle eight" />
        </span>
        <span className="pulse span">
          <div className="small circle one" />
          <div className="small squircle two" />
          <div className="small circle three" />
          <div className="small squircle four" />
          <div className="small circle five" />
          <div className="small squircle six" />
          <div className="small circle seven" />
          <div className="small squircle eight" />
        </span>

        <span className="spin-reverse span">
          <div className="large squircle one" />
        </span>
        <div className="large squircle two">
          <div className="content">
            <br />
            <br />
            <br />
            <h1>Musicon</h1>
            <p>
              <strong>Loading...</strong>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default template;
