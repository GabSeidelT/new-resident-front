import React, { useEffect, useState } from "react";

function Login() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin () {
        fetch('http://127.0.0.1:3001/login',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('teste')
                console.log(data)
            localStorage.setItem("token", data.token)
            setUser(data.user)
            })
    };

    return(
        <div className="card-body container d-flex justify-content-center text-center align-items-center">
            <div className="card mt-5 w-50 p-3 mb-5 bg-body rounded ">
                <div className="card-body ">
                    <form>
                        <h1 className="h1 mb-3 fw-normal">Login</h1>
                        <div className="form-floating col-md-6 w-100">
                            <input 
                                type="email"
                                className="form-control  " 
                                id="floatingInput" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating col-md-6 w-100">
                            <input 
                                type="password" 
                                className="form-control " 
                                id="floatingPassword" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                                placeholder="password"/>
                            <label htmlFor="floatingPassword">Senha</label>
                        </div>
                        <button type="button" onClick={handleLogin} className="btn btn-lg btn-dark mt-3 col-md-6">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;