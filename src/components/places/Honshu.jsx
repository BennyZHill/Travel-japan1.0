import React from "react";
import "./Honshu.css";
function Honshu() {
  return (
    <>
      <div>
        <h1 className="title">Honshu</h1>

        <div className="honshu-image" />
      </div>
      <p className="main-text">
        Honshu is Japan’s main island and home to most of the country’s major
        cities and cultural sites.
      </p>
      <div />
      <div className="image-collage">
        <div className="image1"></div>
        <div className="image2"></div>
        <div className="image3"></div>
      </div>
      <div className="second-text">
        <p>
          On the east coast is the Japanese capital, Tokyo, a busy global hub
          for finance, industry, fashion and cuisine.
        </p>
      </div>
      <div className="final-text">
        <p>
          Mount Fuji, an iconic, snow-capped volcano, lies southwest of the
          city. In central Honshu, the city of Kyoto is famed for its Zen
          temples, gardens lined with cherry blossoms and traditional geisha
          entertainment.
        </p>
      </div>
    </>
  );
}

export default Honshu;
