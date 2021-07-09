import React from 'react'
import { useSelector } from 'react-redux'

const Contacts = () => {
  const { pages: { contacts } } = useSelector((store) => store.content)
  return (
    !!contacts &&
    <div>
      <h2 className="app__title">Контакты</h2>
      <div className="contacts__wrapper">
        <div className="contacts__form">
          <h3>Обратная связь</h3>
          <form action="https://formspree.io/f/xvodbpwr" method="POST">
            <div className="mb-3">
              <label htmlFor="inputName2" className="form-label">Имя</label>
              <input type="text" className="form-control" id="inputName2" placeholder="Иван" name="ИМЯ" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail2" className="form-label">Электронная почта</label>
              <input type="email" className="form-control" id="inputEmail2" aria-describedby="emailHelp" placeholder="example@mail.ru" name="ПОЧТА" required />
            </div>
            <div className="mb-3">
              <label htmlFor="inputText1" className="form-label">Сообщение</label>
              <textarea className="form-control" aria-label="Textarea" id="inputText1" placeholder="Сообщение..." name="СООБЩЕНИЕ" required />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="check1" required />
              <label className="form-check-label" htmlFor="check1">Я согласен с политикой в отношении обработки персональных данных</label>
            </div>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>
        </div>
        <div className="contacts__info">
          <h3>Контактные данные:</h3>
          <div className="contacts__info__items">
            <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts