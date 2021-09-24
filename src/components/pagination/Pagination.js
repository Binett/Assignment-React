import { useEffect } from "react";
import classes from "./Pagination.module.css";

export const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  },[paginate])
 

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
