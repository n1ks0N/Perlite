import React, { useEffect, useState } from 'react'
import { fb } from '../utils/constants/firebase'

const Admin = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fb.firestore().collection('database').doc('admin').get().then((doc) => {
      if (doc.exists) {
        if (doc.data().pass === localStorage.getItem('admin')) {
          setData(doc.data().pages)
        }
      }
    })
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    const { login, pass } = e.target.elements;
    fb.firestore().collection('database').doc('admin').get().then((doc) => {
      if (doc.exists) {
        if (doc.data().pass === pass) {
          setData(doc.data().pages)
        }
      }
    })
  }
  return (
    <div>
      <form onSubmit={handleLogin} style={{width: '500px', margin: 'auto'}}>
        <label>Логин</label>
        <input type="text" name="login" className="form-control" autoComplete="on" required />
        <label>Пароль</label>
        <input type="password" name="pass" className="form-control" autoComplete="on" required />
        <button type="submit" className="btn btn-success">Войти</button>
      </form>
      {!!data && 
        <div>
          
        </div>
      }
    </div>
  )
}

export default Admin