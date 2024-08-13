import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-2 rounded">
      <img src={book.image} className="img-fluid rounded"></img>
      <div>
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
        <Link to={`/detail/${book.id}`} className="btn btn-primary">
          Detay Gör
        </Link>
      </div>
    </div>
  );
};

export default Card;
