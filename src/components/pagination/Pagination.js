import React, { useEffect } from "react";
import classes from "./Pagination.module.css";

export const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paginate]);

  return (
    <ul className={classes.pagination}>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => paginate(number)}> {number}</button>
        </li>
      ))}
    </ul>
  );
};
