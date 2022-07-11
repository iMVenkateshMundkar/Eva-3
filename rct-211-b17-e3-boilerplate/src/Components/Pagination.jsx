import { useRef } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import PageCell from "./PageCell";
import { useEffect } from "react";

export const Pagination = ({ total, selected, onPageChange }) => {
  const pageRef = useRef([]);
  const [currentPage, setCurrentPage] = useState(selected);
  const [pageBoxLen] = useState(new Array(total).fill(""));

  const handleLeftPage = (e, index) => {
    if (currentPage > 0) {
      setCurrentPage((prv) => prv - 1);
      pageRef.current[currentPage].focus();
    } else if (currentPage === 0) {
      pageRef.current[currentPage].focus();
    }
  };

  const handleRightPage = (e, index) => {
    if (currentPage < total - 1) {
      pageRef.current[currentPage].focus();
      setCurrentPage((prv) => prv + 1);
    } else if (currentPage === total - 1) {
      pageRef.current[currentPage].focus();
    }
  };

  useEffect(() => {
    pageRef.current[currentPage].focus();
  }, [pageRef, currentPage]);

  return (
    <div className="pageContainer">
      <input value="<" onClick={handleLeftPage} />
      {pageBoxLen.map((_, index) => {
        return (
          <input
            key={index}
            value={index + 1}
            ref={(ele) => {
              pageRef.current[index] = ele;
            }}
            onClick={(e) => setCurrentPage(index)}
          />
          // <PageCell
          //   key={index}
          //   ref={(ele) => {
          //     pageRef.current[index] = ele;
          //   }}
          //   onClick={(e) => setCurrentPage(index)}
          // />
        );
      })}
      <input value=">" onClick={handleRightPage} />
    </div>
  );
};

Pagination.prototype = {
  total: PropTypes.number.isRequired,
};
