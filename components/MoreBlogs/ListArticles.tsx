import React from "react";
import { Articles } from "../NewsComplete";
import styled from "./styled.module.css";
export default function ListArticles(props: { articles: Articles[] }) {
  return (
    <div className={styled.articlesContainer}>
      <article className={styled.articles}>
        <h2 className={styled.title}>
          {props.articles[1] !== undefined ? props.articles[1].title : ""}
        </h2>
        <p>
          {props.articles[1] !== undefined ? props.articles[1].description : ""}
        </p>
      </article>
      <article className={styled.articles}>
        <h2 className={styled.title}>
          {props.articles[1] !== undefined ? props.articles[2].title : ""}
        </h2>
        <p>
          {props.articles[1] !== undefined ? props.articles[2].description : ""}
        </p>
      </article>
      <article className={styled.articles}>
        <h2 className={styled.title}>
          {props.articles[1] !== undefined ? props.articles[3].title : ""}
        </h2>
        <p>
          {props.articles[1] !== undefined ? props.articles[3].description : ""}
        </p>
      </article>
    </div>
  );
}
