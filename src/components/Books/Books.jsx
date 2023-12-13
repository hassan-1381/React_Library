import React from "react";
import { books } from "../../constants/mockData";
import BookCard from "../BookCard/BookCard";
import Interest from "../interest/Interest";
import { useState } from "react";
import Searchbox from "../Searchbox/Searchbox";

export default function Books() {
  const [interest, setinterest] = useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  const [bookdata, setBookdata] = useState(books);

  const addinterestbook = (Likestatus, data) => {
    if (Likestatus) {
      const newbook = interest.filter((book) => {
        return book.id != data.id;
      });

      setinterest(newbook);
    } else {
      setinterest((interest) => [...interest, { ...data, value: Likestatus }]);
    }
  };

  const searchhandelar = () => {
    if(searchvalue){
        const newbooks = books.filter((name) => {
      return name.title.toLowerCase().includes(searchvalue) ;
    });
    setBookdata(newbooks)
    }
    else{
      setBookdata(books)
    }


  


  };

  return (
    <>
      <Searchbox
        search={searchhandelar}
        searchvalue={searchvalue}
        setsearchvalue={setsearchvalue}
      />

      <div className="grid grid-cols-5 gap-4 mt-10 w-full ">
        <div
          className={`grid gap-4 ${
            interest.length > 0 ? `col-span-3` : `col-span-5`
          }`}
        >
          {bookdata.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              addinterestbook={addinterestbook}
            />
          ))}
        </div>

        {interest.length > 0 && (
          <div className="grid col-span-2 gap-4  w-full p-4  ">
            <div className="flex flex-col gap-4  ">
              {interest.map((book) => (
                <Interest
                  key={book.id}
                  data={book}
                  addinterestbook={addinterestbook}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
