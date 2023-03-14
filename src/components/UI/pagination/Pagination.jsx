import React from 'react';
import { usePagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, setPage}) => {
    const pagesArray = usePagesArray(totalPages);

    return (
        <div className="page__wrapper">
        {pagesArray.map((el) => (
          <span
            onClick={() => setPage(el)}
            className={page === el ? "page page__current" : "page"}
            key={el}
          >
            {el}
          </span>
        ))}
      </div>
    );
};

export default Pagination;