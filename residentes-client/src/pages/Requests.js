import { useState, useEffect } from "react";

const local = 'http://172.18.0.1:8000'

const basicFetch = async (endpoint) => {
    return (await fetch(`${local}${endpoint}`)).json();
}

const [user, setUser] = useState("");

export default {
    handleLogin: async => {
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
    }
};