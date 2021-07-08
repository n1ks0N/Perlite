import React, { useCallback, useEffect, useState } from 'react'

const Admin = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    if (localStorage.getItem('admin') === '') {

    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    const { login, pass } = e.target.elements;
    console.log(login.value, pass.value)
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Логин</label>
        <input type="text" name="login" className="form-control" autoComplete="on" required />
        <label>Пароль</label>
        <input type="password" name="pass" className="form-control" autoComplete="on" required />
        <button type="submit" className="btn btn-success">Войти</button>
      </form>
    </div>
  )
}

export default Admin