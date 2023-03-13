import React from "react";

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const usePagesArray = (totalPages) => {
  const  pagesArray  = [];
  const getPagesArray = React.useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
    }
    console.log(pagesArray);
    return pagesArray
  }, [totalPages]);

return getPagesArray
};
