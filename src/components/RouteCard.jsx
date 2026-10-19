import React from "react";

function RouteCard({ route }) {
  return (
    <a
      href={route.link}
      target="_blank" /* открывает ссылку в новой вкладке*/
      rel="noopener noreferrer"
      // noopener — запрещает новой странице доступ к текущей через window.opener.
      // noreferrer — запрещает передавать информацию о том, откуда пришёл пользователь.
      className="route-card"
    >
      <div className="route-card-image">
        <img src={route.image} alt={route.name} />
      </div>
      <div className="route-card-content">
        <div className="route-card-location">
          <span className="route-country">{route.country}</span>
          <span className="route-city">{route.city}</span>
        </div>
        <h3 className="route-card-name">{route.name}</h3>
        <p className="route-card-description">{route.description}</p>
        <div className="route-card-length">🚴 {route.length}</div>
      </div>
    </a>
  );
}

export default RouteCard;
