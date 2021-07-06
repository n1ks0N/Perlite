import React, { useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Main from '../pages/Main'
import './App.css';
import logo from '../utils/images/logo.jpg'

const App = () => {
  useEffect(() => {
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
          <Link to=""><li>Продукция</li></Link>
          <Link to=""><li>О нас</li></Link>
          <Link to=""><li>Контакты</li></Link>
        </menu>
        <div className="header__contact">
          <a href="tel:+79853637325">+79853637325</a>
          <button type="button" className="btn btn-success">Обратный звонок</button>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="*" component={Main} />
        </Switch>
      </main>
      <footer>
      <div>
          <Link to="/"><img src={logo} className="header__logo_size" /></Link>
        </div>
        <menu className="footer__menu">
          <Link to="/"><li>Главная</li></Link>
          <Link to=""><li>Продукция</li></Link>
          <Link to=""><li>О нас</li></Link>
          <Link to=""><li>Контакты</li></Link>
        </menu>
        <div>
          Мы в социальных сетях:
        </div>
        <div className="header__contact">
          <a href="tel:+79853637325">+79853637325</a>
          <a href="mailto:T.knyazeva@perlitecomplex.com">T.knyazeva@perlitecomplex.com</a>
          <a href="https://kwork.ru/user/n1ks_on" target="_blank">Создание сайтов — Nikson</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
