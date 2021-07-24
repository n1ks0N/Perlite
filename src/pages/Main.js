import React from 'react'
import About from './About'
import Products from './Products'
import Contacts from './Contacts'
import './Main.css'
import { useSelector } from 'react-redux'

const Main = ({ visible }) => {
  const { pages: { main } } = useSelector(store => store.content)
  return (
    !!main && 
    <div>
      <div className="main__wrapper">
        <div id="carouselCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {main.map((v, i) => <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to={i} className={i === 0 ? 'active' : ''} aria-current="true" aria-label={`Slide ${i}`} key={i} />)}
          </div>
          <div className="carousel-inner">
            {main.map((item, i) => 
              <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <img src={item.img} className="d-block w-100" alt="Изображение слайдера" />
              <div className="carousel-caption d-none d-md-block carousel-inner__caption">
                <h5>{item.title}</h5>
                <p>{item.subtitle}</p>
              </div>
            </div>
            )}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>
      </div>
      <About visible={visible} />
      <Products visible={visible} />
      <Contacts visible={visible} />
      </div>
  );
}

export default Main;
