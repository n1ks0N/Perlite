import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className="main__wrapper">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2017/09/25/02/58/autumn-2783817_960_720.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Высококачественные материалы</h5>
              <p>Lorem ipsum</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2017/09/25/02/58/autumn-2783817_960_720.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Приемлемые цены</h5>
              <p>Lorem ipsum</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2017/09/25/02/58/autumn-2783817_960_720.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Быстрая доставка</h5>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
}

export default Main;
