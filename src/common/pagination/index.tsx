import React, { useEffect } from "react";

interface paginationProps {
  className: string;
  totalCount: number;
  limit: number;
  currentPage: number;
  onClick: (item: number) => void;
}

const Pagination = ({
  className,
  totalCount,
  limit,
  onClick,
  currentPage,
}: paginationProps) => {
  const maxPage =
    Math.floor(totalCount / limit) + (totalCount % limit > 0 ? 1 : 0);
  useEffect(() => {
    console.log(maxPage);
    console.log(totalCount);
    console.log(currentPage);
  }, []);

  const pageMoveEvent = (item: number) => {
    onClick(item);
  };

  return (
    <div className={className}>
      {maxPage === 1 ? null : (
        <nav>
          <ul className="pagination">
            {Array.from({ length: maxPage }, (item, index) => {
              return (
                <li
                  className={`page-item ng-scope ${
                    index === currentPage ? "active" : ""
                  }`}
                  ng-repeat="pageNumber in $ctrl.pageRange($ctrl.totalPages)"
                  onClick={() => pageMoveEvent(index)}
                >
                  <p className="page-link ng-binding">{index + 1}</p>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Pagination;
