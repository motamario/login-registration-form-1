import React, {useState} from 'react'
import './App.css'
import Register from './Register'
import Login from './Login'

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (

  <div className='app'>

    {
      currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
    }


  </div>

  )
}

export default App
