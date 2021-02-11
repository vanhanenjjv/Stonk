/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';

import PaginationItem from './PaginationItem';

import { ReactComponent as ChevronLeft } from 'heroicons/solid/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'heroicons/solid/chevron-right.svg';


export interface PaginationProps {
  pages: number;
  page: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ pages, page, onChangePage }) => {
  const className = classNames(
    'relative z-0 inline-flex shadow-sm -space-x-px'
  );

  const start = React.useMemo(() => Math.max(page - 2, 0), [page]);
  const end   = React.useMemo(() => Math.min(page + 3, pages), [page, pages]);

  const items = React.useMemo(
    () => {
      return Array.from({ length: pages })
        .map((_, index) => index)
        .slice(start, end)
        .map(index => (
          <PaginationItem key={index} page={index} onClick={onChangePage} active={index === page}>
            {index + 1}
          </PaginationItem>
        ));
    },
    [start, end]
  );

  return (
    <nav className={className} aria-label="Pagination">
      {page !== 0 && (
        <PaginationItem page={page - 1} onClick={onChangePage} disabled={page - 1 < 0} className="px-2">
          <span className="sr-only">Previous</span>
          <ChevronLeft className="h5 w-5" />
        </PaginationItem>
      )}
      {items}
      {page !== pages - 1 && (
        <PaginationItem page={page + 1} onClick={onChangePage} disabled={page + 1 >= pages} className="px-2">
          <span className="sr-only">Next</span>
          <ChevronRight className="h-5 w-5" />
        </PaginationItem>
      )}
    </nav>
  );
};
