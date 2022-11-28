import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "./styled.module.css";

import imageSrc from "../../assets/images/heart.jpg";

function Navbar() {
  return (
    <nav className={styled.navbarContainer}>
      <div className={styled.navbarText}>
        <Image className={styled.imgTitle} src={imageSrc} alt=""></Image>
        <h1 className={styled.title}>Owl Blog</h1>
      </div>
      <ul className={styled.listLink}>
        <Link className={styled.link} href="/">
          Home
        </Link>
        <Link className={styled.link} href="/about">
          About
        </Link>
        <Link className={styled.link} href="/news">
          News
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
