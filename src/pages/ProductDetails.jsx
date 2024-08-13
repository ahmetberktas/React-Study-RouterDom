import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BookInfo from "../components/BookInfo";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) =>
        navigate("/undifined", { state: error.response.status })
      );
  }, [id]);
  return (
    <div>
      {!book ? (
        <Loading></Loading>
      ) : (
        <div className="row p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={book.image} className="img-fluid rounded shadow"></img>
          </div>
          <div className="col-md-6">
            <h1>{book.title}</h1>
            <div>
              <BookInfo title={"Yazar"} value={book.author}></BookInfo>
              <BookInfo title={"Yıl"} value={book.year}></BookInfo>
              <BookInfo title={"Açıklama"} value={book.description}></BookInfo>
              <BookInfo title={"Sayfa Sayısı"} value={book.page}></BookInfo>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
