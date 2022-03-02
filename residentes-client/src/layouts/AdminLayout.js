import React from "react"
import { Routes } from "react-router-dom"

import admin_routes from "../routes/admin_routes"


function AdminLayout() {

    return (
        <div>

            Admin Layout 

                <Routes>
                    { admin_routes }
                </Routes>

        </div>
    )
};


export default AdminLayout