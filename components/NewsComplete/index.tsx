"use client";
import React, { useEffect, useState } from "react";
import LastTwoNews from "../LastTwoNews";
import MoreBlogs from "../MoreBlogs";
import PrimaryNew from "../PrimaryNew";
import SearchHome from "../SearchHome";
import Videos from "../Videos";

import styled from "./styled.module.css";

const getData = async (q: string, callBack: Function) => {
  const quest = q === "" ? "sports" : q;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${quest}&keyword&apiKey=1704c3a2537f4dde859c2ab25688310a`
  );
  const data = await res.json();
  data.articles.length = 6;
  callBack(data.articles);
};

export interface Articles {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}

export default function NewsComplete() {
  const initialStateArticles: Articles[] = [];

  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState(initialStateArticles);
  useEffect(() => {
    getData(search, setArticles);
  }, [search]);
  return (
    <div className={styled.containerAll}>
      <SearchHome setSearch={setSearch}></SearchHome>
      <div className={styled.newsContainer}>
        <PrimaryNew article={articles[0]}></PrimaryNew>
        <MoreBlogs articles={articles}></MoreBlogs>
      </div>
      <LastTwoNews articles={articles}></LastTwoNews>
      <Videos></Videos>
    </div>
  );
}
