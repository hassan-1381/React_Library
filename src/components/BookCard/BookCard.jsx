import React from "react";

export default function BookCard({
  id,
  author,
  country,
  image,
  language,
  link,
  pages,
  title,
  year,
}) {
  console.log(id);
  return (
    <div>
      <div>
        <a href={link}>
           <img src={`./src/assets/${image}`}></img>  
        </a>
       

        <ul>
          <li>{id}</li>
          <li>{title}</li>
          <li>{language}</li>
          <li>{pages}</li>
          <li>{country}</li>
          <li>{author}</li>
          <li>{year}</li>
        </ul>
      </div>

      <div></div>
    </div>
  );
}
