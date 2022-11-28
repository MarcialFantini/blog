"use client";

import Image from "next/image";
import React, { useState } from "react";

import styled from "./styled.module.css";

import searchUrl from "../../assets/images/busqueda.png";

interface props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchHome(props: props) {
  const [text, setText] = useState("");

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.setSearch(text);
  };

  const searchBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setText("");
    props.setSearch(e.currentTarget.value);
  };

  return (
    <div className={styled.searchContainer}>
      <form className={styled.form}>
        <div className={styled.input}>
          <label className={styled.label} htmlFor="aaaaa">
            <Image height="10" width="10" src={searchUrl} alt="search"></Image>
          </label>
          <input
            value={text}
            onChange={handlerChange}
            className={styled.inputText}
            type="text"
          />
        </div>
        <button onClick={onSubmit} className={styled.btnSubmit} type="submit">
          Search
        </button>
      </form>
      <div className={styled.categories}>
        <button value="" onClick={searchBtn} className={styled.category}>
          All
        </button>
        <button onClick={searchBtn} value="Sports" className={styled.category}>
          Sports
        </button>
        <button
          onClick={searchBtn}
          value="Industry"
          className={styled.category}
        >
          Industry
        </button>
        <button onClick={searchBtn} value="Music" className={styled.category}>
          Music
        </button>
        <button onClick={searchBtn} value="Politic" className={styled.category}>
          Politic
        </button>
      </div>
    </div>
  );
}
