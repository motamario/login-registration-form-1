import React, {useState} from 'react'

function Register() {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[name, setName] = useState('')

    const handleSubmit = () => {
        email.preventDefault();
         console.log(email);
     }

  return (
    <div className='register'>

        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Full Name:</label>
            <input type="text" value={name} name='name' id='name' placeholder='Full Name'/>
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email@address.com' id='email' name='email' />
            <label htmlFor="password">Password:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id='password' name='password' />
            <button type='submit'>Log In</button>

        </form>

        <button>Already have an account? Login here!</button>

    </div>
  )
}

export default Register