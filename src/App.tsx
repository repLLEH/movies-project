import React from 'react'
import {Routes, Route, BrowserRouter, createBrowserRouter} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import Filters from './pages/Filters/Filters'
import Switch, { RouterProvider } from "react-router"


import './App.css'

const router = createBrowserRouter([
    {
        path:'/filters',
        element: <Filters/>,
    },
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/recommended',
        element: ''
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router}/>
        
    );
}