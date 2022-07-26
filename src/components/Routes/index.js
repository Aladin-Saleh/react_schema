import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";



// pages
import Home from "../../pages/Home";

function index() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>

    )




}

export default index;