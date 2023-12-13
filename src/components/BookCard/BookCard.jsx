import React from "react";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";



export default function BookCard({
  addinterestbook,
  data,

}) {

  const { id, author, country, image, language, link, pages, title, year } =
    data;

    const [LikeStatus, setLike] = useState(false);

  const changLike = (LikeStatus, data) => {
    setLike(!LikeStatus);
    addinterestbook(LikeStatus, data);
    console.log(LikeStatus);
  };

  return (
    <div className="grid grid-cols-2 justify-between  bg-stone-600 p-4 rounded-xl h-46 w-full">
      <div className=" grid grid-col-1 grid-cols-2 items-center">
        <a href={link}>
          <img src={`./src/assets/${image}`}></img>
        </a>

        <ul>
          <li>{title}</li>
          <li> language : {language}</li>
          <li> pages : {pages}</li>
          <li> country : {country}</li>
          <li> author : {author}</li>
          <li> year : {year}</li>
        </ul>
      </div>

      <div className="grid grid-col-1 justify-end items-start ">
        {LikeStatus ? (
          <FcLike
            className="w-8 h-8"
            onClick={() => changLike(LikeStatus, data)}
          />
        ) : (
          <FaRegHeart
            className="w-8 h-8"
            onClick={() => changLike(LikeStatus, data)}
          />
        )}
      </div>
    </div>
  );
}
