import React from "react";
import orion from "../assets/img/SS-OrionNews-Full.png";
import arrancar from "../assets/img/SS-Arrancar-Full.png";
import adana from "../assets/img/SS-Adana.png";

function BlogPage() {
  return (
    <div>
      <section className="blog">
        <div className="blog-heading">
          <span>My Recent Posts</span>
          <h3>My Blog</h3>
        </div>
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={orion} alt="" />
            </div>
            <div className="blog-text">
              <span>Mobile Application</span>
              <h3>Orion News Mobile App</h3>
              <p>
                Orion News adalah Sebuah aplikasi berita menggunakan Bahasa
                Pemrograman Java, menggunakan API (newsapi), dan Firebase
                sebagai database user.
              </p>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={arrancar} alt="" />
            </div>
            <div className="blog-text">
              <span>Website Application</span>
              <h3>Arrancar Website Application</h3>
              <p>
                Arrancar adalah Sebuah website yang menyediakan layanan VPS.
                Dalam pembuatannya, Arrancar menggunakan HTML, CSS, JavaScript,
                menggunakan Framework CodeIgniter 4 dan MySQL sebagai database.
              </p>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={adana} alt="" />
            </div>
            <div className="blog-text">
              <span>Dekstop Application</span>
              <h3>ADANA</h3>
              <p>
                ADANA adalah Sebuah Desktop Aplikasi untuk keperluan
                Administrasi dan mengelola gudang. Arrancar menggunakan Java GUI
                dan MySQL sebagai Databasenya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
