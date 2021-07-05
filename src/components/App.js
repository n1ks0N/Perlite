import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Main from '../pages/Main'
import './App.css';
import logo from '../utils/images/logo.jpg'

const App = () => {
  return (
    <div className="app">
      <header>
        <div>
          <Link to="/"><img src={logo} className="header__logo_size" /></Link>
        </div>
        <menu>
          <Link to="/"><li>Главная</li></Link>
          <Link to=""><li>Продукция</li></Link>
          <Link to=""><li>О нас</li></Link>
          <Link to=""><li>Контакты</li></Link>
        </menu>
        <div className="header__contact">
          <a href="tel:+79853637325">+79853637325</a>
          <a href="mailto:T.knyazeva@perlitecomplex.com">T.knyazeva@perlitecomplex.com</a>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="*" component={Main} />
        </Switch>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
