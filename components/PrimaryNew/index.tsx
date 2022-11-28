"use client";

import Image from "next/image";
import React from "react";

import styled from "./styled.module.css";

import url from "../../assets/images/primary.jpg";
import { Articles } from "../NewsComplete";

interface props {
  article?: Articles;
}

export default function PrimaryNew(props: props) {
  console.log(props.article);
  return (
    <div className={styled.PrimaryNewContainer}>
      <picture className={styled.picture}>
        <Image
          className={styled.img}
          fill
          src={props.article !== undefined ? props.article.urlToImage : ""}
          alt={props.article !== undefined ? props.article.title : "loading..."}
        ></Image>
      </picture>
      <h1>
        {props.article !== undefined ? props.article.title : "loading..."}
      </h1>
    </div>
  );
}
