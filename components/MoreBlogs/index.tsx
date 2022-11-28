import Image from "next/image";
import React from "react";

import styled from "./styled.module.css";
import urlImage from "../../assets/images/busqueda.png";
import ListArticles from "./ListArticles";
import { Articles } from "../NewsComplete";

export default function MoreBlogs(props: { articles: Articles[] }) {
  return (
    <div className={styled.containerBlogs}>
      <h1>More Blogs</h1>
      <div className={styled.divider}>
        <div className={styled.circle + " " + styled.primero}></div>
        <div className={styled.circle + " " + styled.segundo}></div>
      </div>
      <ListArticles articles={props.articles}></ListArticles>
      <button className={styled.button}>
        See All{" "}
        <Image
          className={styled.imgSearch}
          alt="search"
          height="10"
          src={urlImage}
        ></Image>
      </button>
    </div>
  );
}
