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


  return (
    <div className="app">
      <div className="search-box">
      <form className="form-search" onSubmit={onSubmitHandler}>
          <label>
            <span style={{color:"white"}}>Search for books</span>
            <input
              type="search"
              placeholder="search ..."
              value={searchTerm}
              onChange={onInputChange}
              className="form-search-input"
            />
            <button className="form-search-button" type="submit">Search</button>
          </label>
        </form>
      </div>
      
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
