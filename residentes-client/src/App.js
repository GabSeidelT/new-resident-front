import React, { useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import CreateCompany from "./pages/Companies/CreateCompany";

function App () {

    const [user, setUser] = useState('');

    useEffect(() => {
        
    
        if(typeof localStorage.token === 'undefined'){
            console.log(localStorage.token);
            return <Register/>;
        }else{
            fetch('http://127.0.0.1:3001/login',{
                headers: {"Authenticate": localStorage.token}
            })
            .then(res => res.json())
            .then(user =>{
                setUser(user)
            })
        }
    },[])
    return <Register/>;
    
}

export default App;
