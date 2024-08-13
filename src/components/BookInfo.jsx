import React from "react";

const BookInfo = ({ title, value }) => {
  return (
    <p>
      <span className="badge bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};

export default BookInfo;
