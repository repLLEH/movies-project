import React from 'react'
import {Routes, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Switch from "react-router"

export const App = () => {
    return (
        <>
        <Nav/>
        <h1>Hello world</h1>
        </>
    );
}