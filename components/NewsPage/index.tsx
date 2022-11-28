import Image from "next/image";
import React from "react";
import { Articles } from "../NewsComplete";

import styled from "./styled.module.css";

const getData = async (q: string) => {
  const quest = "gaming";
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${quest}&keyword&apiKey=1704c3a2537f4dde859c2ab25688310a`
  );
  const data: { articles: Articles[] } = await res.json();
  data.articles.length = 50;

  return data.articles;
};

export default async function NewsPage() {
  const data = await getData("");

  return (
    <>
      <h1 className={styled.title}>News!</h1>
      <div className={styled.containerAll}>
        {data !== undefined
          ? data.map((item) => (
              <div className={styled.containerItem} key={item.title}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
                <picture className={styled.picture}>
                  {item.urlToImage ? (
                    <Image
                      className={styled.img}
                      width="600"
                      height="300"
                      src={item.urlToImage}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </picture>
              </div>
            ))
          : ""}
      </div>
    </>
  );
}
