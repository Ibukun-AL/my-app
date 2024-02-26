import React, { useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = Math.min(totalPages, 5); // Display maximum 5 page numbers

    const firstPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const lastPage = Math.min(totalPages, firstPage + visiblePages - 1);

    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(
        <button
          key={i}
          className={`px-2 py-1 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md ${
            i === currentPage ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    if (firstPage > 2) {
      pages.unshift(
        <button key="..." className="px-2 py-1 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md">
          ...
        </button>
      );
    }

    if (lastPage < totalPages - 1) {
      pages.push(
        <button key="..." className="px-2 py-1 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md">
          ...
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex space-x-2 items-center justify-center">
      <button
        className="px-5 py-6 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md disabled:opacity-50"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        className="px-2 py-1 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md disabled:opacity-50"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
