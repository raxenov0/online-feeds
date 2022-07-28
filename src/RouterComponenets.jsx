import { Error } from "./pages/error"
import Posts from "./pages/posts"
import { About } from "./pages/about"
import { PageId } from "./pages/pageIdPost"
import { Login } from "./components/login/login"

export const RouteComponents = {
    publicRoute:
        [{path:'/login',Element: Login},
        {path:'/*',Element: Login}
        ],
    privateRoute:
        [
        {path:'/',Element: Posts},
        {path:'/about',Element: About},
        {path:'/post/:id',Element: PageId},
        {path:'/*',Element: Error}
    ]
}