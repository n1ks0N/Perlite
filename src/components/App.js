import React, { useEffect, useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Main from '../pages/Main'
import About from '../pages/About';
import logo from '../utils/images/logo.jpg'
import './App.css';
import Products from '../pages/Products';
import Contacts from '../pages/Contacts';
import Admin from './Admin';
import { fb } from '../utils/constants/firebase';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const [contacts, setContacts] = useState({})
  useEffect(() => {
    fb.firestore().collection('database').doc('admin').get().then((doc) => {
      if (doc.exists) {
        dispatch({
          type: 'GET_PAGES',
          pages: doc.data().pages
        })
        setContacts({
          mail: doc.data().pages.contacts.email,
          tel: doc.data().pages.contacts.phone
        })
      }
    })
    console.log(`
	   _ _                    
 _ __ (_) | _____  ___  _ __  
| '_ \\| | |/ / __|/ _ \\| '_ \\ 
| | | | |   <\\__ \\ (_) | | | |
|_| |_|_|_|\\_\\___/\\___/|_| |_|

Powered on ReactJS 
by https://github.com/n1ks0N
			`);
  }, [])
  return (
    <div className="app">
      <header>
        <div>
          <Link to="/"><img src={logo} className="header__logo_size" /></Link>
        </div>
        <menu className="header__menu">
          <Link to="/"><li>Главная</li></Link>
          <Link to="/about"><li>О нас</li></Link>
          <Link to="/products"><li>Продукция</li></Link>
          <Link to="/contacts"><li>Контакты</li></Link>
        </menu>
        <div className="header__contact">
          <a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalCallback">Обратный звонок</button>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contacts" component={Contacts} />
          <Route path="*" component={Main} />
        </Switch>
      </main>
      <footer>
        <div>
          <Link to="/"><img src={logo} className="header__logo_size" /></Link>
        </div>
        <menu className="footer__menu">
          <Link to="/"><li>Главная</li></Link>
          <Link to="/about"><li>О нас</li></Link>
          <Link to="/products"><li>Продукция</li></Link>
          <Link to="/contacts"><li>Контакты</li></Link>
        </menu>
        <div>
          Мы в социальных сетях:
        </div>
        <div className="header__contact">
          <a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
          <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
          <a href="https://kwork.ru/user/n1ks_on" target="_blank">Создание сайтов — Nikson</a>
        </div>
      </footer>
      <div className="modal fade" id="modalCallback" tabIndex="-1" aria-labelledby="modalCallbackLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalCallbackLabel">Оставьте заявку и Вам перезвонят через несколько минут!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="https://formspree.io/f/xqkwdzdo" method="POST">
                <div className="mb-3">
                  <label htmlFor="inputPhone1" className="form-label">Телефон</label>
                  <input type="tel" className="form-control" id="inputPhone1" placeholder="8 (910) 999 99 99" name="ТЕЛЕФОН" required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="check1" required />
                  <label className="form-check-label" htmlFor="check1">Я согласен с политикой в отношении обработки персональных данных</label>
                </div>
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
  );
}

export default App;
