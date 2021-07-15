import React, { useEffect, useState } from 'react'
import { fb } from '../utils/constants/firebase'

const Admin = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fb.firestore().collection('database').doc('admin').get().then((doc) => {
      if (doc.exists) {
        if (doc.data().pass === localStorage.getItem('admin')) {
          setData(doc.data().pages)
          console.log(doc.data())
        }
      }
    })
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    const { login, pass } = e.target.elements;
    fb.firestore().collection('database').doc('admin').get().then((doc) => {
      if (doc.exists) {
        console.log(doc.data().pass, pass)
        if (doc.data().pass === pass.value) {
          setData(doc.data().pages)
          localStorage.setItem('admin', 'admin')
          console.log(doc.data())
        }
      }
    })
  }

  const itemChange = ({ value }, type) => {
    const category = type.split('.')[0]
    const subcategory = type.split('.')[1]
    const number = type.split('.')[2]
    const arr = data[category]
    arr[number] = { ...arr[number], [subcategory]: value }
    setData(prev => ({ ...prev, [category]: arr }))
  }

  const inputChange = ({value}, type) => {
    const category = type.split('.')[0]
    const param = type.split('.')[1]
    setData((prev) => ({ ...prev, [category]: {
      ...prev[category],
      [param]: value
    } }))
  }
  console.log(data)
  return (
    <div>
      {!data &&
      <form onSubmit={handleLogin} style={{width: '500px', margin: 'auto'}}>
        <label>Логин</label>
        <input type="text" name="login" className="form-control" autoComplete="on" required />
        <label>Пароль</label>
        <input type="password" name="pass" className="form-control" autoComplete="on" required />
        <button type="submit" className="btn btn-success">Войти</button>
      </form>
      }
      {!!data && 
        <div>
          <h1>Главная</h1>
          {data.main.map((item, i) => <div key={i}>
            <label>Заголовок</label>
            <input value={item.title} className="form-control" onChange={(e) => itemChange(e.target, `main.title.${i}`)} />
            <label>Подзаголовк</label>
            <input value={item.subtitle} className="form-control" onChange={(e) => itemChange(e.target, `main.subtitle.${i}`)} />
            <label>Изображение</label>
            <input value={item.img} className="form-control" onChange={(e) => itemChange(e.target, `main.img.${i}`)} /> 
          </div>)}
          <h1>О нас</h1>
          {Object.entries(data.about).map((item, i) => 
          <div key={i}>
            <label>{item[0]}</label>
            <input value={item[1]} className="form-control" onChange={(e) => inputChange(e.target, `about.${item[0]}`)} />
          </div>)}
          <h1>Продукция</h1>
          {data.products.map((item, i) => 
          <div key={i}>
            <label>Заголовок</label>
            <input value={item.title} className="form-control" onChange={(e) => itemChange(e.target, `products.title.${i}`)} />
            <label>Подзаголовк</label>
            <input value={item.subtitle} className="form-control" onChange={(e) => itemChange(e.target, `products.subtitle.${i}`)} />
            <label>Изображение</label>
            <input value={item.img} className="form-control" onChange={(e) => itemChange(e.target, `products.img.${i}`)} /> 
          </div>)}
          <h1>Контакты</h1>
          {Object.entries(data.contacts).map((item, i) => 
          <div key={i}>
            <label>{item[0]}</label>
            <input value={item[1]} className="form-control" onChange={(e) => inputChange(e.target, `contacts.${item[0]}`)} />
          </div>)}
        </div>
      }
    </div>
  )
}

export default Admin