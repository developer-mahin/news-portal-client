import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNewsCardData from '../../Shared/AllNewsCardData/AllNewsCardData';


const Home = () => {
    const allNews = useLoaderData()

    return (
        <div>
            {
                allNews.map(news=> <AllNewsCardData 
                    key={news._id}
                    news={news}
                ></AllNewsCardData>)
            }
        </div>
    );
};

export default Home;