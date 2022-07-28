import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./../pages/posts";
import { About } from "./../pages/about";
import { Error } from "./../pages/error";
import { PageId } from "../pages/pageIdPost";
import { Navigation } from "./navigation/navigation";
import { RouteComponents } from "../RouterComponenets";
import { AuthContext } from "../context";

export const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    console.log(isAuth)
    return(
        <>
        <Navigation/>
           
            {isAuth ?
                <Routes>
                    {RouteComponents.privateRoute.map((route, index) => {
                        return <Route key = {index} path = {route.path} element={<route.Element />}/>
                        })}
                </Routes>
            :
            <Routes>
                {RouteComponents.publicRoute.map((route, index) => {
                    return <Route key = {index} path = {route.path} element={<route.Element />}/>
                    })}
            </Routes>
            }
        </>
    )
}