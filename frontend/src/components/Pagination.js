import React, { useEffect, useState } from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
  const nextPage = () => {
    if (currentPage !== nPages)
      setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1)
      setCurrentPage(currentPage - 1)
  }
  return (


    <div class="paddingTopPagination flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
          <li class="page-item"><a onClick={prevPage}
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href="#">previous</a></li>
          {pageNumbers.map((pgNumber) => {
            return <li key={Math.random()} class="page-item"><a onClick={() => setCurrentPage(pgNumber)}
              className={`page-link relative block py-1.5 px-3 rounded border-0 ${currentPage == pgNumber ? 'bg-blue-600' : 'bg-transparent'} outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
              href="#">{pgNumber}</a></li>
          })}

          <li class="page-item"><a onClick={nextPage}
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  )

};

export default Pagination;
