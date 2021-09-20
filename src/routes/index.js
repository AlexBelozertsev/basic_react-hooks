import PostsPage from '../pages/PostsPage';
import CounterPage from '../pages/CounterPage';
import ErrorPage from '../pages/ErrorPage';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';


export const privateRoutes = [
    {path: "/posts", component: PostsPage, exact: true},
    {path: "/posts/:id", component: PostIdPage, exact: true},
]

export const publicRoutes = [
    {path: "/login", component: Login, exact: true},
    {path: "/count", component: CounterPage, exact: false},
    {path: "/error", component: ErrorPage, exact: false},
]