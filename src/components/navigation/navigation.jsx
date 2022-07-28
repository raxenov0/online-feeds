import React from "react";
import navigation from './navigation.module.css'
import './../../App.css';
import { NavLink } from 'react-router-dom'


export const Navigation = () =>{
    return(
        <div className={navigation.wrapper}>
            
            <nav className="navLink">
                <NavLink className="link" to="/">Posts</NavLink>
                <NavLink className="link" to="/about">About Me</NavLink>
                <NavLink className="link" to="/portfolio">Portfolio</NavLink>
                <div className="dot"></div>
            </nav>
        </div>
    )
}