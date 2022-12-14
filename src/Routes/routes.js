import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Category from '../pages/Category/Category/Category';
import ErrorPage from '../pages/ErrorPage/Error/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import News from '../pages/News/News/News';
import Profile from '../pages/Others/Profile/Profile';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://news-portal-server-chi.vercel.app/news")
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://news-portal-server-chi.vercel.app/category/${params.id}`)

            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://news-portal-server-chi.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }

        ]
    }
])

export default router;