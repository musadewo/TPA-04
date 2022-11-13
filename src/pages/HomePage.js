import React from "react";
import foto from "../assets/img/foto.png";

function HomePage() {
  return (
    <div>
      <section className="home container-home">
        <div className="home-content">
          <div className="home-img">
            <img src={foto} alt="" />
          </div>
          <div className="home-text">
            <h3>Hello</h3>
            <h2>
              Saya <span className="color">Muhammad Sadewo Wicaksono</span>
            </h2>
            <p>
              Saya Seorang <span className="color">Developer & Designer</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
