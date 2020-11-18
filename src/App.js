import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {
  // Definition of category and news
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  // Get news when change search's category
  useEffect(() => {
    const getApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=813be021390c4e418e0b7338e06f54e1`;
      const response = await fetch(url);
      const news = await response.json();
      setNews(news.articles);
    };
    getApi();
  }, [category]);

  return (
    <>
      <Header title="Buscador de noticias" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <NewsList news={news} />
      </div>
    </>
  );
}

export default App;
