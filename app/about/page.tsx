import Image from "next/image";
import React from "react";

import styled from "./styled.module.css";
import srcUrl from "../../assets/images/about.webp";

export default function About() {
  return (
    <div className={styled.aboutContainer}>
      <div className={styled.text}>
        <h1 className={styled.title}>We are a blog of news!</h1>
      </div>
      <picture className={styled.picture}>
        <Image
          alt="svg with persons"
          className={styled.img}
          src={srcUrl}
        ></Image>
      </picture>
    </div>
  );
}
