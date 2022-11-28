"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import primero from "../../assets/images/ForVideos/1.jpg";
import segundo from "../../assets/images/ForVideos/2.jpg";
import tercero from "../../assets/images/ForVideos/3.jpg";

import styled from "./styled.module.css";

const classPlaces = [
  styled.videos + " " + styled.primera,
  styled.videos + " " + styled.segunda,
  styled.videos + " " + styled.tercera,
];

const SetNewClass = (lugar: number, list: string[]) => {
  if (lugar > 2) {
    return list[lugar - 3];
  } else {
    return list[lugar];
  }
};

export default function Videos() {
  const [first, setFirst] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      first === 2 ? setFirst(0) : setFirst((value) => value + 1);
    }, 6000);
  }, [first]);

  return (
    <div className={styled.videoContainer}>
      <div className={SetNewClass(first, classPlaces)}>
        <picture className={styled.picture}>
          <Image className={styled.img} src={primero} alt=""></Image>
        </picture>
      </div>

      <div className={SetNewClass(first + 1, classPlaces)}>
        <picture className={styled.picture}>
          <Image className={styled.img} src={segundo} alt=""></Image>
        </picture>
      </div>
      <div className={SetNewClass(first + 2, classPlaces)}>
        <picture className={styled.picture}>
          <Image className={styled.img} src={tercero} alt=""></Image>
        </picture>
      </div>
    </div>
  );
}
