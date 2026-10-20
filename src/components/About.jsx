import React from "react";

function About() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img
          src={`${import.meta.env.BASE_URL}images/velosipedisty-i-mir.png`}
          alt="Велосипедист на закате"
        />

        {/* Левая часть: заголовок + цитата */}
        <div className="about-left">
          <h2 className="about-title">Велосипедные маршруты</h2>
          <blockquote className="about-quote">
            «Посмотри <br /> на <i>мир</i>. <br /> Он куда удивительнее <br />{" "}
            снов»
            <cite>— Рэй Брэдбери</cite>
          </blockquote>
        </div>

        {/* Правая часть: описание + кнопка */}
        <div className="about-right">
          <p className="about-description">
            Твои веломаршруты: <br /> от первого поворота до финала
          </p>
          <a href="#routes" className="btn-routes">
            Смотреть маршруты →
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
