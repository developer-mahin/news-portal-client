import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCardData from "../../Shared/newsCardData/NewsCardData";

const Category = () => {
  const categoryNews = useLoaderData();

  return (
    <div>
      {categoryNews.map((category) => (
        <NewsCardData key={category._id} category={category}></NewsCardData>
      ))}
    </div>
  );
};

export default Category;
