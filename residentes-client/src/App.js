import React, { useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import CreateCompany from "./pages/Companies/CreateCompany";

function App () {

    const [user, setUser] = useState('');

    useEffect(() => {
        if(localStorage.token){
            fetch('http://127.0.0.1:3001/login',{
                headers: {"Authenticate": localStorage.token}
            })
            .then(res => res.json())
            .then(user =>{
                setUser(user)
            })
        }else{
            <Login/>
        }
    
    },[])

    return (
        <>
            <CreateCompany/>
            {/* <Login /> */}
        </>
    );
}

export default App;
