import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main'
import Category from '../pages/Category/Category/Category';
import ErrorPage from '../pages/ErrorPage/Error/ErrorPage';
import Home from '../pages/Home/Home/Home';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element: <Category></Category>
            },
            {
                path:'/news',
                element:'/news/:id'
            }

        ]
    }
])

export default router ;