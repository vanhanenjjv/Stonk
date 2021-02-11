import React from 'react';


type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type DragAndDropProps =
  & Omit<DivProps, 'onDrop' | 'onDragOver'>
  & { onDrop?: (files: File | null | undefined) => void }

export const DragAndDrop: React.FC<DragAndDropProps> = ({ onDrop, ...other }) => {

  const handleDrop = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (onDrop)
        onDrop(event.dataTransfer.files.item(0));
    },
    [onDrop]
  );

  const handleDragOver = React.useCallback(
    (event: React.DragEvent<HTMLInputElement>) => event.preventDefault(),
    []
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      {...other} />
  );
};
