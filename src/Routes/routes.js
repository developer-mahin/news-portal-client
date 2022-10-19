import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Category from '../pages/Category/Category/Category';
import ErrorPage from '../pages/ErrorPage/Error/ErrorPage';
import Home from '../pages/Home/Home/Home';
import News from '../pages/News/News/News';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/news")
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }

        ]
    }
])

export default router;