import React from 'react';

export default function Pagination({ productPerPage, totalProduct, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className='col-lg-12 d-flex justify-content-center'>
      <div className='btn-group' role='group' aria-label='Basic example'>
        {pageNumber.map((number) => (
          <button
            key={number}
            type='button'
            className='btn btn-primary'
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
