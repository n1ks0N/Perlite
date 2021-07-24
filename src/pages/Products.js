import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Products = ({ visible }) => {
  const { pages: { products } } = useSelector((store) => store.content)
  const [prod, setProd] = useState(0)
  return (
    !!products &&
    <div className="section" onWheel={(e) => visible(e.currentTarget)}>
      <h2 className="app__title">Наша продукция</h2>
      <div className="products__wrapper">
        {products.map((item, i) =>
          <div className="card" style={{ width: '18rem' }} key={i}>
            <img src={item.img} className="card-img-top" alt="Товар" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.subtitle}</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalOrder" onClick={() => setProd(item.title)}>Купить</button>
            </div>
          </div>
        )}
      </div>
      <div className="modal fade" id="modalOrder" tabIndex="-1" aria-labelledby="modalOrderLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalOrderLabel">Оставить заявку</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="https://formspree.io/f/mayadwdk" method="POST">
              <div className="mb-3">
                  <label htmlFor="inputName1" className="form-label">Имя</label>
                  <input type="text" className="form-control" id="inputName1" placeholder="Иван" name="ИМЯ" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail1" className="form-label">Электронная почта</label>
                  <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="example@mail.ru" name="ПОЧТА" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhone2" className="form-label">Телефон</label>
                  <input type="tel" className="form-control" id="inputPhone2" placeholder="8 (910) 999 99 99" name="ТЕЛЕФОН" required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="check1" required />
                  <label className="form-check-label" htmlFor="check1">Я согласен с политикой в отношении обработки персональных данных</label>
                </div>
                <input type="hidden" value={prod} name="ТОВАР" />
                <button type="submit" className="btn btn-primary">Отправить</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products