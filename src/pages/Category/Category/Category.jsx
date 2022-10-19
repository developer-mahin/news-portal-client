import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Category = () => {
    const allNews = useLoaderData()

    return (
        <div>
            <h2>Hello from Category {allNews.length}</h2>
        </div>
    );
};

export default Category;