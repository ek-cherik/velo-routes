import React, { useState, useEffect } from "react";
import RouteCard from "./RouteCard";

function RoutesList() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newRouteName, setNewRouteName] = useState("");
  const [newRouteCountry, setNewRouteCountry] = useState("");
  const [newRouteCity, setNewRouteCity] = useState("");
  const [newRouteDescription, setNewRouteDescription] = useState("");
  const [newRouteLength, setNewRouteLength] = useState("");
  const [newRouteImage, setNewRouteImage] = useState("");
  const [newRouteLink, setNewRouteLink] = useState("");

  // Загружаем данные из JSON файла через fetch
  useEffect(() => {
    // Искусственная задержка в 2 секунды
    setTimeout(() => {
      fetch(`${import.meta.env.BASE_URL}data/routes.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка загрузки данных");
          }
          return response.json();
        })
        .then((data) => {
          setRoutes(data.routes);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Ошибка:", error);
          setLoading(false);
        });
    }, 2000);
  }, []); //Выполняется эффект только один раз после первого рендеринга

  // Функция для добавления нового маршрута
  const handleAddRoute = (e) => {
    e.preventDefault();

    const newRoute = {
      id: routes.length + 1,
      name: newRouteName,
      country: newRouteCountry,
      city: newRouteCity,
      description: newRouteDescription,
      length: newRouteLength,
      image:
        newRouteImage ||
        "https://via.placeholder.com/300x200?text=Новый+маршрут",
      link: newRouteLink || "#",
    };

    setRoutes([...routes, newRoute]);

    setNewRouteName("");
    setNewRouteCountry("");
    setNewRouteCity("");
    setNewRouteDescription("");
    setNewRouteLength("");
    setNewRouteImage("");
    setNewRouteLink("");
  };

  if (loading) {
    return <div className="loading">Загрузка маршрутов...</div>;
  }

  return (
    <section id="routes" className="routes-section">
      <div className="routes-container">
        <h2 className="routes-title">Лучшие веломаршруты</h2>

        <div className="routes-grid">
          {routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>

        <div className="add-route-form">
          <h3>Добавить новый маршрут</h3>
          <form onSubmit={handleAddRoute}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Название маршрута *"
                value={newRouteName}
                onChange={(e) => setNewRouteName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Страна *"
                value={newRouteCountry}
                onChange={(e) => setNewRouteCountry(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Город *"
                value={newRouteCity}
                onChange={(e) => setNewRouteCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Протяженность (например: 15 км) *"
                value={newRouteLength}
                onChange={(e) => setNewRouteLength(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Описание маршрута *"
                value={newRouteDescription}
                onChange={(e) => setNewRouteDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Ссылка на картинку (необязательно)"
                value={newRouteImage}
                onChange={(e) => setNewRouteImage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Ссылка на подробный маршрут (необязательно)"
                value={newRouteLink}
                onChange={(e) => setNewRouteLink(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-add-route">
              Добавить маршрут
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RoutesList;
