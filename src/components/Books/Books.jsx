import React from "react";
import { books } from "../../constants/mockData";
import BookCard from "../BookCard/BookCard";


export default function Books() {
  return (
    <>
      <div>
        <div>
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
}
