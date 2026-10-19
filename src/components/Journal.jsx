import React, { useState } from "react";

function Journal() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); /*отмена стандартного поведения браузера, не перезагружает страницу при отправке формы*/
    if (email) {
      setMessage("Спасибо! Вы подписаны на журнал HORIZONT 🚴");
      setEmail("");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <section id="journal" className="journal-section">
      <div className="journal-container">
        <h2 className="journal-title">Журнал путешествие</h2>
        <h3 className="journal-subtitle">ПИСЬМА ИЗ ДОРОГИ</h3>
        <p className="journal-description">
          Раз в две недели – текст об одном месте, которые стоит увидеть. Без
          рекламы и рейтингов, только живые впечатления.
        </p>

        <form className="journal-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="journal-input"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="journal-btn">
            Подписаться
          </button>
        </form>
        {message && <div className="journal-message">{message}</div>}
      </div>
    </section>
  );
}

export default Journal;
