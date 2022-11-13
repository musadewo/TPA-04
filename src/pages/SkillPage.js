import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import php from "../assets/img/php.png";
import mysql from "../assets/img/mysql.png";
import cpp from "../assets/img/cpp.png";
import java from "../assets/img/java.png";
import kotlin from "../assets/img/kotlin.png";

function SkillPage() {
  return (
    <div>
      <section className="skill">
        <div className="inner">
          <div className="header">
            <h1>My Skill</h1>
          </div>
          <div className="container-skill">
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={html} alt="" className="skill-icon" />
                </div>
                <h3>HTML 5</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={css} alt="" className="skill-icon" />
                </div>
                <h3>CSS</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={js} alt="" className="skill-icon" />
                </div>
                <h3>JavaScript</h3>
                <p>Beginner</p>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={php} alt="" className="skill-icon" />
                </div>
                <h3>PHP</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={mysql} alt="" className="skill-icon" />
                </div>
                <h3>MySQL</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={cpp} alt="" className="skill-icon" />
                </div>
                <h3>C++</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={java} alt="" className="skill-icon" />
                </div>
                <h3>Java</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={kotlin} alt="" className="skill-icon" />
                </div>
                <h3>Kotlin</h3>
                <p>Beginner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillPage;
