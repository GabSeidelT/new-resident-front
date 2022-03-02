import React from "react"
import { Routes } from "react-router-dom"

import user_routes from "../routes/user_routes"


function UserLayout() {

    return (
        <div>
            User Layout 
    
            
                <Routes>
                    { user_routes }
                </Routes>

        </div>
    )
};



export default UserLayout