import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const ProductsPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="card-container">
        {books.map((book) => {
          return <Card key={book.id} book={book}></Card>;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
