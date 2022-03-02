import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react';
import ReactDom from 'react-dom';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import AdminLayout from "./layouts/AdminLayout"
// import UserLayout from "./layouts/UserLayout"

import App from './App.js';

ReactDom.render(
    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/user/*" element={<UserLayout />} />
    //         <Route path="/admin/*" element={<AdminLayout />} />
    //         <Route path="*" element={<Navigate replace to="/user" />}/>
    //     </Routes>
    // </BrowserRouter>,
    <App/>,
    document.querySelector("#root"));