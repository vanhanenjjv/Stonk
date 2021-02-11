/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';


type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

type PaginationItemProps =
  & Omit<AnchorProps, 'onClick'>
  & { page: number;
      onClick: (page: number) => void;
      active?: boolean,
      disabled?: boolean };

const PaginationItem: React.FC<PaginationItemProps> = ({ page, onClick, children, disabled = false, active = false, ...other }) => {
  // let className = 'relative inline-flex items-center py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700';

  const className = classNames(
    'relative inline-flex items-center py-2 border text-sm border-gray-300 font-medium text-gray-700 px-4',
    { ' bg-white hover:bg-gray-100': !active },
    { 'cursor-pointer': !disabled && !active },
    { 'bg-gray-100': disabled || active },
    other.className
    // 'first:px-2 first:rounded-l-md',
    // 'last:px-2 last:rounded-r-md '
  );

  const handleClick = (): void => {
    if (disabled)
      return;

    if (active)
      return;

    onClick(page);
  };

  return (
    <a onClick={handleClick} className={className}>
      {children}
    </a>
  );
};


export default PaginationItem;
