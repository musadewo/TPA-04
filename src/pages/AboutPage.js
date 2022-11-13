import React from "react";
import foto from "../assets/img/foto.png";

function AboutPage() {
  return (
    <div>
      <section className="about">
        <div className="content">
          <img src={foto} alt="" />
          <div className="text">
            <h1>About Me</h1>
            <h5>Developer & Designer</h5>
            <p>
              Saya seorang front-end developer dan designer, saya dapat membuat
              tampilan aplikasi website dan aplikasi mobile. Saya dapat membuat
              codingan yang simple dan mudah dipahami agar mudah dimaintance.
              Saya juga dapat membuat tampilan aplikasi website responsive agar
              dapat digunakan diberbagai device tanpa merusak tampilannya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
