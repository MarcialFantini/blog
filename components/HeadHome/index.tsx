import Image from "next/image";
import React from "react";

import styled from "./styled.module.css";
import karateUrl from "../../assets/images/karate.jpg";

export default function HeadHome() {
  return (
    <header className={styled.headerContainer}>
      <div className={styled.textHeader}>
        <h1 className={styled.titleHeader}>WELCOME TO BLOG</h1>
        <p className={styled.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corporis repellat in nulla molestiae optio. Repudiandae quis, unde
          tempora dolorum quo esse inventore? Doloremque tenetur, impedit cumque
          esse reprehenderit aut.
        </p>
      </div>
      <picture className="imgHeader">
        <Image className={styled.img} src={karateUrl} alt=""></Image>
      </picture>
    </header>
  );
}
