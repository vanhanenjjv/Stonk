import React from 'react';


type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type FileInputProps =
  & Omit<InputProps, 'type' | 'onChange'>
  & { onChange?: (file: File | null | undefined) => void
      type: 'file' };

export const FileInput: React.FC<FileInputProps> = ({ onChange, ...other }) => {
  const reference = React.useRef<HTMLInputElement>(null);

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();

      if (onChange && reference.current)
        onChange(reference.current.files?.item(0));
    },
    [onChange, reference]
  );

  return (
    <input
      ref={reference}
      onChange={handleSubmit}
      {...other} />
  );
};
