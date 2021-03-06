import React, { useState, useEffect } from 'react'
import APIService from '../APIService';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    let history = useHistory()
    useEffect(() => {

        if (token['mytoken']) {
            history.push('/articles')
        }
    }, [token])

    const loginBtn = () => {

        APIService.LoginUser({ username, password })
            .then(resp => setToken('mytoken', resp.token))
            .catch(error => console.log(error))
    }

    const RegisterBtn = () => {

        APIService.RegisterUser({ username, password })
            .then(resp => loginBtn())
            .catch(error => console.log(error))
    }
    return (
        <div className="App">
            <center><h1 class="text-primary">BLOG WEBSITE</h1></center><br/><br/>
            {isLogin ? <h1 class="text-success">Login</h1> : <h1>Register</h1>}<br /><br />

            <div className="mb-1">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Please Enter Username"
                    value={username} onChange={e => setUsername(e.target.value)}

                />
            </div><br />

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Please Enter password"
                    value={password} onChange={e => setPassword(e.target.value)}
                />
            </div>

            {isLogin ? <button onClick={loginBtn} className="btn btn-outline-primary btn-lg">Login</button>
                : <button onClick={RegisterBtn} className="btn btn-outline-danger btn-lg">Register</button>

            }&nbsp;&nbsp;

                
            {isLogin ? <button className="btn btn-outline-danger btn-lg" onClick={() => setLogin(false)}>Register</button>
                : <h5>If you have Account, Please <button className="btn btn-outline-primary" onClick={() => setLogin(true)}>Login</button> Here</h5>
            }

        </div>
    )

}
export default Login