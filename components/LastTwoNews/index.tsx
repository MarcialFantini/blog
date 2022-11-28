import Image from "next/image";
import React from "react";
import { Articles } from "../NewsComplete";

import styled from "./styled.module.css";

export default function LastTwoNews(props: { articles: Articles[] }) {
  return (
    <div className={styled.LastTwoNews}>
      <div className={styled.images}>
        <div className={styled.containerNew}>
          <picture className={styled.picture}>
            <Image
              className={styled.img}
              width="800"
              height="500"
              src={
                props.articles[1] !== undefined
                  ? props.articles[4].urlToImage
                  : ""
              }
              alt=""
            ></Image>
          </picture>
          <h2>
            {props.articles[1] !== undefined ? props.articles[4].title : ""}
          </h2>
        </div>
        <div className={styled.containerNew}>
          <picture className={styled.picture}>
            <Image
              className={styled.img}
              src={
                props.articles[5] !== undefined
                  ? props.articles[5].urlToImage
                  : ""
              }
              width="800"
              height="500"
              alt=""
            ></Image>
          </picture>
          <h2>
            {props.articles[5] !== undefined ? props.articles[5].title : ""}
          </h2>
        </div>
      </div>
      <button>Load More</button>
    </div>
  );
}
