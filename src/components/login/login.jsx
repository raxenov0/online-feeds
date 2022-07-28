import React, { useContext } from "react";
import { AuthContext } from "../../context";
import login from './login.module.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const posts = useNavigate()

    return(
        <form>
            <div className={login.fullWindow}> 
                <div className={login.wrapper}>
                    <span className={login.header}>Sign in</span>
                    <div className={login.inputTitle}>
                        <p>Name</p>
                        <input type="name" id="title" className={login.input} placeholder="Name..." />
                    </div>
                    <div className={login.inputTitle}>
                        <p>Email</p>
                        <input type="email" id="body" className={login.input} placeholder="@email"  />
                    </div>
                    <button className={login.button} onClick={event=> {
                        event.preventDefault()
                        setIsAuth(true)
                        posts('/')
                        localStorage.setItem('auth', true)   
                        }
                    }>
                        <p>Log in</p>
                    </button>
                </div>
            </div>
        </form>
    )
}