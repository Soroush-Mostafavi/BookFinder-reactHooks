import React, { useState } from "react";
import axios from "axios";
import Cardbook from "./components/Card";
import "./App.css";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  // const bookAuthors = authors => {
  //   if (authors.length <= 10) {
  //     authors = authors.join(" and ");
  //   } else if (authors.length > 2) {
  //     let lastAuthor = " and " + authors.slice(-1);
  //     authors.pop();
  //     authors = authors.join(", ");
  //     authors += lastAuthor;
  //   }
  //   return authors;
  // };

  return (
    <div className="app">
             <form onSubmit={onSubmitHandler}>
          <label>
            <span>Search for books</span>
            <input
              type="search"
              placeholder="microservice, restful design, etc.,"
              value={searchTerm}
              onChange={onInputChange}
            />
            <button type="submit">Search</button>
          </label>
        </form>
      <section>
   
        <div className="result">
          {books.items.map((book, index) => {
            return (
              <Cardbook key={index} book={book} />

              // <p>{book.volumeInfo.description}</p>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
