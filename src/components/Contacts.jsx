import React from "react";

function Contacts() {
  return (
    <section className="contacts-section">
      <div className="contacts-container">
        <h2>Связаться с нами</h2>
        <div className="contacts-info">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <h3>Телефон</h3>
              <p>+7 (999) 123-45-67</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>info@horizont.ru</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
