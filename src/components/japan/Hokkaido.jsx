import React from "react";
import "./Hokkaido.css";
function Hokkaido() {
  return (
    <>
      <div className="Hokkaido">
        <h1 className="Hokkaido-title">Hokkaido</h1>

        <div className="hokkaido-image" />

        <p className="main-text">
          Hokkaido, the northernmost of Japan’s main islands, is known for its
          volcanoes, natural hot springs (onsen) and ski areas.{" "}
        </p>
        <div />
        <div className="second-text">
          <p>
            Rugged Daisetsuzan National Park is home to steaming, volcanic Mount
            Asahi.
          </p>
        </div>
        <div className="image-collage">
          <div className="hk1" />
          <div className="hk2" />
          <div className="hk3" />
        </div>
        <div className="final-text">
          <p>
            Shikotsu-Tōya National Park contains caldera lakes, geothermal
            springs and a Mount Fuji look-alike, Mount Yōtei. Popular ski
            resorts include Rusutsu, Furano and Niseko.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hokkaido;
