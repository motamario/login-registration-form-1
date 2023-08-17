import React, { useState } from 'react'

function Login(props) {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const handleSubmit = () => {
       email.preventDefault();
        console.log(email);
    }

  return (


    <div className='login'>

        <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email@address.com' id='email' name='email' />
            <label htmlFor="password">Password:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id='password' name='password' />
            <button type='submit'>Log In</button>

        </form>

        <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>

    </div>
  )
}

export default Login